import { AxiosResponse } from "axios";
import * as APIClient from "../clients/bankAPIClient";
import {LOCAL_PAYMENT_MODE} from "../utils/Constants";

describe("Bank API", () => {
    let bankAPIClient: APIClient.BankAPIClient;

    beforeEach(async () => {
        bankAPIClient = new APIClient.BankAPIClient();
    });

    it("should work for LOCAL payment Method", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "US", "John Smith",
                    "123", "", "11122277A", "");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });
    });

    it("should work for SWIFT payment Method", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails("SWIFT", "US", "John Smith",
                    "123", "ICBCUSBJ", "11122277A", "");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });

    });

    it("should throw error for any other payment method", async () => {
        const errorResponse: AxiosResponse<any> = await bankAPIClient
        .saveDetails("KSA", "US", "John Smith",
                    "123", "ICBCUSBJ", "11122277A", "");
        expect(errorResponse.status).toBe(400);
        // console.log(errorResponse.data);
        // console.log(response.status);
        // expect(errorResponse.data)
        // .toEqual({ error: "payment_method' field required, the value should be either 'LOCAL' or 'SWIFT'"});
    });
});
