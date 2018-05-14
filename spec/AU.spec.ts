import { AxiosResponse } from "axios";
import * as APIClient from "../clients/bankAPIClient";
import {LOCAL_PAYMENT_MODE} from "../utils/Constants";

describe("Bank API for Australia", () => {
    let bankAPIClient: APIClient.BankAPIClient;

    beforeEach(async () => {
        bankAPIClient = new APIClient.BankAPIClient();
    });

    it("should work for acc number length 6", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "AU", "John Smith",
                    "112311", "", "", "063182");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });
    });

    it("should work for account number of length 8", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "AU", "John Smith",
                    "11231123", "", "", "063182");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });
    });

    it("should work for account number of length 9", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "AU", "John Smith",
                    "112311231", "", "", "063182");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });
    });

    it("should work for bank country code AU", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "AU", "John Smith",
                    "11231123", "", "", "063182");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });
    });

    it("should throw error when bsb is not supplied", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "AU", "John Smith",
                    "123311", "", "", "");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "'bsb' is required when bank country code is 'AU'"});
    });

    it("should throw error when bsb length not equal to 6", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "AU", "John Smith",
                    "123311", "", "", "0456A");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "Length of 'bsb' should be 6"});
    });

    it("should successfully save details for valid swift code", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails("SWIFT", "AU", "John Smith",
                    "123311", "CTBAAU2S7)", "", "063182");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });
    });

    it("should thow error for invalid swift code", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails("SWIFT", "AU", "John Smith",
                    "123311", "CTBAJK2S7)", "", "063182");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "The swift code is not valid for the given bank country code: AU" });
    });

    it("should thow error for account number length less than 6", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails("SWIFT", "AU", "John Smith",
                    "12331", "CTBAJK2S7)", "", "063182");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "Length of account_number should be between 6 and 9 when bank_country_code is 'AU'" });
    });

    it("should thow error for account number length greater than 9", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails("SWIFT", "AU", "John Smith",
                    "1233112331", "CTBAJK2S7)", "", "063182");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "Length of account_number should be between 6 and 9 when bank_country_code is 'AU'" });
    });

});
