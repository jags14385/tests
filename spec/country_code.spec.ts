import { AxiosResponse } from "axios";
import * as APIClient from "../clients/bankAPIClient";
import {LOCAL_PAYMENT_MODE} from "../utils/Constants";

describe("Bank API", () => {
    let bankAPIClient: APIClient.BankAPIClient;

    beforeEach(async () => {
        bankAPIClient = new APIClient.BankAPIClient();
    });

    it("should work for bank country code US", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "US", "John Smith",
                    "123", "ICBCUSBJ", "11122277A", "");
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

    it("should work for bank country code CN", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "CN", "John Smith",
                    "12331123", "", "", "");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });

    });

    it("should not work for other country codes", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "UK", "John Smith",
                    "12331123", "", "", "");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({error : "'bank_country_code' is required, and should be one of 'US', 'AU', or 'CN'"});
    });

});
