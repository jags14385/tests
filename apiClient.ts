import axios, { AxiosInstance } from "axios";
import * as dotenv from "dotenv";

class APIClient {

    private BASE_URL:string = 'http://preview.airwallex.com/30001/bank';

    public getAPIInstance(): AxiosInstance {
        return axios.create({
          baseURL: this.BASE_URL 
        });
    }
}