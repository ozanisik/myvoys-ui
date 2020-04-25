import { Dictionary } from 'vue-router/types/router';
import axios, { AxiosResponse } from "axios";
export class ApiManager {

    responseMessage: AxiosResponse<any> | undefined

    public get({ url, parameters }: { url: string; parameters: Dictionary<string> }): AxiosResponse<any> | any {
        axios.get(url).then(response => {
            return response;
        })
    }

    public post({ url, parameters }: { url: string; parameters: Dictionary<string> }): AxiosResponse<any> | any {
        axios.post(url).then(response => {
            return response;
        })
    }
}