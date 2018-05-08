import * as APIClient from "../clients/bankAPIClient";

describe("Bank API", () => {
    let bankAPIClient: APIClient.BankAPIClient;

    beforeEach(async () => {
        bankAPIClient = new APIClient.BankAPIClient();
    });

    it("should work for LOCAL payment Method", async () => {
    });

    it("should work for SWIFT payment Method", async () => {
    });

    it("should throw 400 Error for invalid payment methods",() => {

    });
});
