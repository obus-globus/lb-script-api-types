import type { Request } from '../../../../com/mojang/realmsclient/client/Request.d.ts'
import type { HttpURLConnection } from '../../../../java/net/HttpURLConnection.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Request$Delete extends Request<Request$Delete> {
    static cookie(paramconnection: HttpURLConnection, paramkey: string, paramvalue: string): void;
    static delete(paramurl: string): Request<Object>;
    static get(paramurl: string): Request<Object>;
    static get(paramurl: string, paramconnectTimeoutMillis: number, paramreadTimeoutMillis: number): Request<Object>;
    static getHeader(paramconnection: HttpURLConnection, paramheader: string): string;
    static getRetryAfterHeader(paramconnection: HttpURLConnection): number;
    static post(paramuri: string, paramcontent: string): Request<Object>;
    static post(paramuri: string, paramcontent: string, paramconnectTimeoutMillis: number, paramreadTimeoutMillis: number): Request<Object>;
    static put(paramurl: string, paramcontent: string): Request<Object>;
    static put(paramurl: string, paramcontent: string, paramconnectTimeoutMillis: number, paramreadTimeoutMillis: number): Request<Object>;
    constructor(uri: string, connectTimeout: number, readTimeout: number)
    doConnect(): Request$Delete;
}