import type { HttpRequest } from '../../../../com/microsoft/aad/msal4j/HttpRequest.d.ts'
import type { HttpResponse } from '../../../../com/microsoft/aad/msal4j/HttpResponse.d.ts'
import type { IHttpClient } from '../../../../com/microsoft/aad/msal4j/IHttpClient.d.ts'
import type { IHttpResponse } from '../../../../com/microsoft/aad/msal4j/IHttpResponse.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { HttpURLConnection } from '../../../../java/net/HttpURLConnection.d.ts'
import type { Proxy } from '../../../../java/net/Proxy.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { SSLSocketFactory } from '../../../../javax/net/ssl/SSLSocketFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultHttpClient extends Object implements IHttpClient {
    constructor(arg0: Proxy, arg1: SSLSocketFactory, arg2: number, arg3: number)
    // private connectTimeout: number;
    // private proxy: Proxy;
    // private readTimeout: number;
    // private sslSocketFactory: SSLSocketFactory;
    // private configureAdditionalHeaders(arg0: HttpURLConnection, arg1: HttpRequest): void;
    // private executeHttpGet(arg0: HttpRequest): HttpResponse;
    // private executeHttpPost(arg0: HttpRequest): HttpResponse;
    // private inputStreamToString(arg0: InputStream): string;
    openConnection(arg0: URL): HttpURLConnection;
    // private readResponseFromConnection(arg0: HttpURLConnection): HttpResponse;
    send(arg0: HttpRequest): IHttpResponse;
}