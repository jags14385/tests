import * as APIClient from "../clients/bankAPIClient";

describe("Bank API", () => {
    let bankAPIClient: APIClient.BankAPIClient;

    beforeEach(async () => {
        bankAPIClient = new APIClient.BankAPIClient();
    });

    it("should return successful repsonse for valid details", async () => {
        const response = await bankAPIClient.saveDetails("LOCAL", "US", "aba",
                                        "123", "ICBCUSBJ", "11122233AA");
        console.log(response);
    });
});
