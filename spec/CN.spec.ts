import { AxiosResponse } from "axios";
import * as APIClient from "../clients/bankAPIClient";
import {LOCAL_PAYMENT_MODE, SWIFT_PAYMENT_MODE} from "../utils/Constants";

describe("Bank API for China", () => {
    let bankAPIClient: APIClient.BankAPIClient;

    beforeEach(async () => {
        bankAPIClient = new APIClient.BankAPIClient();
    });

    it("should work for acc number length 8", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "CN", "John Smith",
                    "11231112", "", "", "");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });
    });

    it("should thow error for account number of length less than 8", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "CN", "John Smith",
                    "12331", "", "", "");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "Length of account_number should be between 8 and 20 when bank_country_code is 'CN'" });
    });

    it("should thow error for account number of length greater than 20", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "CN", "John Smith",
                    "123311233112331123311", "", "", "");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "Length of account_number should be between 8 and 20 when bank_country_code is 'CN'" });
    });

    it("should work for account number of length 15", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "CN", "John Smith",
                    "1123112312345", "", "", "");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });
    });

    it("should work for account number of length 20", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "CN", "John Smith",
                    "12345123451234512345", "", "", "");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });
    });

    it("should successfully save details for valid swift code", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(SWIFT_PAYMENT_MODE, "CN", "John Smith",
                    "12341234", "CTBACNCD", "", "");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });
    });

    it("should thow error for invalid swift code", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(SWIFT_PAYMENT_MODE, "CN", "John Smith",
                    "12341234", "CTBAAU2S7)", "", "");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "The swift code is not valid for the given bank country code: CN" });
    });

});
