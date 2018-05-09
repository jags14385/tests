import { AxiosResponse } from "axios";
import * as APIClient from "../clients/bankAPIClient";

describe("Bank API", () => {
    let bankAPIClient: APIClient.BankAPIClient;

    beforeEach(async () => {
        bankAPIClient = new APIClient.BankAPIClient();
    });

    it("should return successful repsonse for valid details", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
                                        .saveDetails("SWIFT", "US", "John Smith",
                                                    "123", "ICBCUSBJ", "11122277A");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });
    });
});
