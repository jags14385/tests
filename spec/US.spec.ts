import { AxiosResponse } from "axios";
import * as APIClient from "../clients/bankAPIClient";
import {LOCAL_PAYMENT_MODE, SWIFT_PAYMENT_MODE} from "../utils/Constants";

describe("Bank API for US", () => {
    let bankAPIClient: APIClient.BankAPIClient;

    beforeEach(async () => {
        bankAPIClient = new APIClient.BankAPIClient();
    });

    it("should successfully save bank details of length 1 and aba length 9", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "US", "John Smith",
                    "1", "", "123456789", "");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });
    });

    it("should successfully save bank details of length 6 and aba length 9", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "US", "John Smith",
                    "123456", "", "123456789", "");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });
    });

    it("should successfully save bank details of length 17 and aba length 9", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "US", "John Smith",
                    "12345678901234567", "", "123456789", "");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });
    });

    it("should throw error to save bank details of length 20 and aba length 9", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "US", "John Smith",
                    "12345678901234567890", "", "123456789", "");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "Length of account_number should be between 1 and 17 when bank_country_code is 'US'" });
    });

    it("should successfully save bank details For payment method SWIFT", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(SWIFT_PAYMENT_MODE, "US", "John Smith",
                    "123456", "ABCDUSDODO", "123456789", "");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });
    });

    it("should throw error when PAYMENT method is SWIFT and swift code is not supplied", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(SWIFT_PAYMENT_MODE, "US", "John Smith",
                    "123456", "", "123456789", "");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "'swift_code' is required when payment method is 'SWIFT'" });
    });

    it("should throw error when PAYMENT method is SWIFT and swift code is wrong", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(SWIFT_PAYMENT_MODE, "US", "John Smith",
                    "123456", "ABCDAUIO", "123456789", "");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "The swift code is not valid for the given bank country code: US" });
    });

    it("should throw error when aba of length 12", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(SWIFT_PAYMENT_MODE, "US", "John Smith",
                    "123456", "ABCDUSDODO", "123456789012", "");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "Length of 'aba' should be 9" });
    });

    it("should throw error when aba of length 5", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(SWIFT_PAYMENT_MODE, "US", "John Smith",
                    "123456", "ABCDUSDODO", "12345", "");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "Length of 'aba' should be 9" });
    });

    it("should throw error when aba is not supplied", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(SWIFT_PAYMENT_MODE, "US", "John Smith",
                    "123456", "ABCDUSDODO", "", "");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "Length of 'aba' should be 9" });
    });
});
