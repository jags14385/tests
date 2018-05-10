import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as dotenv from "dotenv";

export class BankAPIClient {

    public saveDetails(paymentMethod: string,
                       bankCountryCode: string, accountName: string,
                       accountNumber: string, swiftCode: string, aba: string, bsb: string)
                       : Promise<AxiosResponse> {

            const jsonData = {
                payment_method: paymentMethod,
                bank_country_code: bankCountryCode,
                account_name: accountName,
                account_number: accountNumber,
                swift_code: swiftCode,
                aba,
                bsb,
            };

            // Load env from .env file
            dotenv.config();
            const urlStr: any = process.env.API_URL ;

            return axios.post(urlStr, jsonData, {
            headers: { "content-type": "application/json" },
        }).then((response) => {
                    // console.log(response.status);
                    // console.log(response.statusText);
                    return response;
            }).catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    //  console.log(error.response.status);
                    //  console.log('url:',url_str)
                    // console.log(error.response);
                  }
                return error.response;
            });
    }
}
