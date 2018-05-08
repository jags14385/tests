import { APIClient } from "./apiClient";

export class BankAPIClient extends APIClient {

    saveDetails(payment_method:string,
        bank_country_code:string,account_name:string,
        account_number:string,swift_code:string,aba:string) {
        var jsonData = {
                "payment_method": payment_method,
                "bank_country_code": bank_country_code,
                "account_name": account_name,
                "account_number": account_number,
                "swift_code": swift_code,
                "aba": aba
        }
        return this.getAPIInstance().post('/',jsonData)
                    .then(response => response.data);
    }
}