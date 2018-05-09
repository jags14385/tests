import * as APIClient from "../clients/bankAPIClient";
import { AxiosResponse } from "axios";

describe("Bank API for AU", () => {
    let bankAPIClient: APIClient.BankAPIClient;

    beforeEach(async () => {
        bankAPIClient = new APIClient.BankAPIClient();
    });

    it('should work for bank country code AU',async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails("LOCAL", "AU", "John Smith",
                    "11231123", "", "", "063182");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });
    });

    it('should throw error when bsb is not supplied',async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails("LOCAL", "AU", "John Smith",
                    "123311", "", "","");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "'bsb' is required when bank country code is 'AU'"});
    });

    it('should throw error when bsb length not equal to 6',async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails("LOCAL", "AU", "John Smith",
                    "123311", "", "","0456A");
        expect(response.status).toBe(400);
        expect(response.data).toEqual({ error: "Length of 'bsb' should be 6"});
    });

    it('should successfully save details for valid swift code',async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails("SWIFT", "AU", "John Smith",
                    "123311", "CTBAAU2S7)", "","063182");
        expect(response.status).toBe(200);
    });

});