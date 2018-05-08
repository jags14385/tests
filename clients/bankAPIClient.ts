import { APIClient } from "./apiClient";

export class BankAPIClient extends APIClient {

    public saveDetails(paymentMethod: string,
                       bankCountryCode: string, accountName: string,
                       accountNumber: string, swiftCode: string, aba: string) {
        const jsonData = {
                paymentMethod,
                bankCountryCode,
                accountName,
                accountNumber,
                swiftCode,
                aba,
        };
        return this.getAPIInstance().post("/", jsonData)
                    .then((response) => response.data);
    }
}
