import type { Request } from '../../../../com/mojang/realmsclient/client/Request.d.ts'
import type { HttpURLConnection } from '../../../../java/net/HttpURLConnection.d.ts'
export class Request$Delete extends Request<Request$Delete> {
    static cookie(paramconnection: HttpURLConnection, paramkey: string, paramvalue: string): void;
    static delete(paramurl: string): Request<any>;
    static get(paramurl: string): Request<any>;
    static get(paramurl: string, paramconnectTimeoutMillis: number, paramreadTimeoutMillis: number): Request<any>;
    static getHeader(paramconnection: HttpURLConnection, paramheader: string): string;
    static getRetryAfterHeader(paramconnection: HttpURLConnection): number;
    static post(paramuri: string, paramcontent: string): Request<any>;
    static post(paramuri: string, paramcontent: string, paramconnectTimeoutMillis: number, paramreadTimeoutMillis: number): Request<any>;
    static put(paramurl: string, paramcontent: string): Request<any>;
    static put(paramurl: string, paramcontent: string, paramconnectTimeoutMillis: number, paramreadTimeoutMillis: number): Request<any>;
    constructor(uri: string, connectTimeout: number, readTimeout: number)
    doConnect(): Request$Delete;
}