import { AxiosResponse } from "axios";
import * as APIClient from "../clients/bankAPIClient";
import {SWIFT_PAYMENT_MODE} from "../utils/Constants";

describe("Bank API", () => {
    let bankAPIClient: APIClient.BankAPIClient;

    beforeEach(async () => {
        bankAPIClient = new APIClient.BankAPIClient();
    });

    it("should successfully process for valid swift code of length 8", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(SWIFT_PAYMENT_MODE, "US", "John Smith",
                    "123", "ABCDUSIO", "11122277A", "");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });
    });

    it("should successfully process for valid swift code of length 11", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(SWIFT_PAYMENT_MODE, "US", "John Smith",
                    "123", "ABCDUSIOIOI", "11122277A", "");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });
    });

    it("should throw error for swift code of length 9", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(SWIFT_PAYMENT_MODE, "US", "John Smith",
                    "123", "ABCDUSIO1", "11122277A", "");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "Length of 'swift_code' should be either 8 or 11" });
    });

    it("should throw error for swift code of length 7", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(SWIFT_PAYMENT_MODE, "US", "John Smith",
                    "123", "ABCDUSI", "11122277A", "");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "Length of 'swift_code' should be either 8 or 11" });
    });

    it("should throw error for swift code of length 12", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(SWIFT_PAYMENT_MODE, "US", "John Smith",
                    "123", "ABCDUSIO12IO", "11122277A", "");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "Length of 'swift_code' should be either 8 or 11" });
    });
});
