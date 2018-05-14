import { AxiosResponse } from "axios";
import * as APIClient from "../clients/bankAPIClient";
import {LOCAL_PAYMENT_MODE} from "../utils/Constants";

describe("Bank API for Australia", () => {
    let bankAPIClient: APIClient.BankAPIClient;

    beforeEach(async () => {
        bankAPIClient = new APIClient.BankAPIClient();
    });

    it("should throw error when account number is not supplied", async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails(LOCAL_PAYMENT_MODE, "AU", "John Smith",
                    "", "", "", "");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "'account_number' is required"});

    });
});
