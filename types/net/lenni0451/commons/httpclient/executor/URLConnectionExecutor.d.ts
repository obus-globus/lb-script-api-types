import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { CookieManager } from '../../../../../java/net/CookieManager.d.ts'
import type { HttpURLConnection } from '../../../../../java/net/HttpURLConnection.d.ts'
import type { HttpClient } from '../../../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { RequestExecutor } from '../../../../../net/lenni0451/commons/httpclient/executor/RequestExecutor.d.ts'
import type { ProxyHandler } from '../../../../../net/lenni0451/commons/httpclient/proxy/ProxyHandler.d.ts'
import type { HttpRequest } from '../../../../../net/lenni0451/commons/httpclient/requests/HttpRequest.d.ts'
export class URLConnectionExecutor extends RequestExecutor {
    constructor(arg0: HttpClient)
    execute(arg0: HttpRequest): HttpResponse;
    // private executeRequest(arg0: HttpURLConnection, arg1: CookieManager, arg2: HttpRequest): HttpResponse;
    // private getInputStream(arg0: HttpURLConnection): InputStream;
    // private openConnection(arg0: HttpRequest, arg1: CookieManager, arg2: ProxyHandler): HttpURLConnection;
    // private readAllBytes(arg0: InputStream, arg1: number): number[];
    // private setupConnection(arg0: HttpURLConnection, arg1: CookieManager, arg2: HttpRequest): void;
}