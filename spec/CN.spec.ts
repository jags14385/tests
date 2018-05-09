import * as APIClient from "../clients/bankAPIClient";
import { AxiosResponse } from "axios";

describe("Bank API for CN", () => {
    let bankAPIClient: APIClient.BankAPIClient;

    beforeEach(async () => {
        bankAPIClient = new APIClient.BankAPIClient();
    });
});