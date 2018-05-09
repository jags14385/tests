import * as APIClient from "../clients/bankAPIClient";
import { AxiosResponse } from "axios";

describe("Bank API", () => {
    let bankAPIClient: APIClient.BankAPIClient;

    beforeEach(async () => {
        bankAPIClient = new APIClient.BankAPIClient();
    });

    it('should accept account name of length 2',async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails("LOCAL", "US", "JD",
                    "123", "AKBJ", "11122277A","");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });

    });

    it('should accept account name of length 4',async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails("LOCAL", "US", "John",
                    "123", "ICBCUSBJ", "11122277A","");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });

    });

    it('should accept account name of length 10',async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails("LOCAL", "US", "John Smith",
                    "123", "ICBCUSBJ", "11122277A","");
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: "Bank details saved" });

    });
    
    it('should accept account name of length 1',async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails("LOCAL", "US", "J",
                    "123", "ICBCUSBJ", "11122277A", "");
        expect(response.status).toBe(400);
    });

    it('should accept account name of length 12',async () => {
        const response: AxiosResponse<any> = await bankAPIClient
        .saveDetails("LOCAL", "US", "John Smith O",
                    "123", "ICBCUSBJ", "11122277A", "");
        expect(response.status).toBe(400);
    });


    });