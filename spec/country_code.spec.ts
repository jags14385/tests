import * as APIClient from "../clients/bankAPIClient";
import { AxiosResponse } from "axios";

describe("Bank API", () => {
    let bankAPIClient: APIClient.BankAPIClient;

    beforeEach(async () => {
        bankAPIClient = new APIClient.BankAPIClient();
    });

    it('should work for bank country code US',async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails("LOCAL", "US", "John Smith",
                    "123", "ICBCUSBJ", "11122277A");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });

    });

    it('should work for bank country code AU',async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails("LOCAL", "AU", "John Smith",
                    "123", "ICBCAUBJ", "11122277A");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });

    });

    it('should work for bank country code CN',async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails("LOCAL", "CN", "John Smith",
                    "123", "ICBCCNBJ", "11122277A");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });

    });

    it('should not work for other country codes',async () => {

    });

});