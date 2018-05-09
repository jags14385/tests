import * as APIClient from "../clients/bankAPIClient";
import { AxiosResponse } from "axios";

describe("Bank API for US", () => {
    let bankAPIClient: APIClient.BankAPIClient;

    beforeEach(async () => {
        bankAPIClient = new APIClient.BankAPIClient();
    });

    it('should successfully save bank details of length 1',async () => {

    });

    it('should successfully save bank details of length 6',async () => {

    });

    it('should successfully save bank details of length 17',async () => {

    });

    it('should throw error to save bank details of length 20',async () => {

    });

    it('should successfully save bank details when aba of length 9',async () => {

    });

    it('should successfully save bank details For payment method LOCAL',async () => {

    });

    it('should successfully save bank details For payment method SWIFT',async () => {

    });

    it('should throw error when PAYMENT method is SWIFT and swift code is not supplied',async () => {

    });

    it('should throw error when aba of length 12',async () => {

    });

    it('should throw error when aba of length 5',async () => {

    });

    it('should throw error when aba is not supplied',async () => {

    });
});