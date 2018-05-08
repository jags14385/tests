import { APIClient } from "./apiClient";

export class BankAPIClient extends APIClient {

    saveDetails() {
        var jsonData = {
                "payment_method": "SWIFT",
                "bank_country_code": "US",
                "account_name": "John Smith",
                "account_number": "123",
                "swift_code": "ICBCUSBJ",
                "aba": "11122233A"
        }
        return this.getAPIInstance().post('/',jsonData)
                    .then(response => response.data);
    }


}