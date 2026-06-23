import type { CookieManager } from '../../../../java/net/CookieManager.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HeaderStore } from '../../../../net/lenni0451/commons/httpclient/HeaderStore.d.ts'
import type { HttpRequestBuilder } from '../../../../net/lenni0451/commons/httpclient/HttpRequestBuilder.d.ts'
import type { HttpResponse } from '../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { ExecutorType } from '../../../../net/lenni0451/commons/httpclient/executor/ExecutorType.d.ts'
import type { RequestExecutor } from '../../../../net/lenni0451/commons/httpclient/executor/RequestExecutor.d.ts'
import type { HttpResponseHandler } from '../../../../net/lenni0451/commons/httpclient/handler/HttpResponseHandler.d.ts'
import type { ProxyHandler } from '../../../../net/lenni0451/commons/httpclient/proxy/ProxyHandler.d.ts'
import type { HttpContentRequest } from '../../../../net/lenni0451/commons/httpclient/requests/HttpContentRequest.d.ts'
import type { HttpRequest } from '../../../../net/lenni0451/commons/httpclient/requests/HttpRequest.d.ts'
import type { DeleteRequest } from '../../../../net/lenni0451/commons/httpclient/requests/impl/DeleteRequest.d.ts'
import type { GetRequest } from '../../../../net/lenni0451/commons/httpclient/requests/impl/GetRequest.d.ts'
import type { HeadRequest } from '../../../../net/lenni0451/commons/httpclient/requests/impl/HeadRequest.d.ts'
import type { PostRequest } from '../../../../net/lenni0451/commons/httpclient/requests/impl/PostRequest.d.ts'
import type { PutRequest } from '../../../../net/lenni0451/commons/httpclient/requests/impl/PutRequest.d.ts'
import type { RetryConfig } from '../../../../net/lenni0451/commons/httpclient/retry/RetryConfig.d.ts'
export class HttpClient extends HeaderStore<HttpClient> implements HttpRequestBuilder {
    constructor()
    constructor(arg0: (param0: HttpClient) => RequestExecutor)
    constructor(arg0: ExecutorType)
    readonly connectTimeout: number;
    readonly cookieManager: CookieManager;
    // private executor: RequestExecutor;
    readonly followRedirects: boolean;
    readonly ignoreInvalidSSL: boolean;
    readonly proxyHandler: ProxyHandler;
    readonly readTimeout: number;
    // private retryConfig: RetryConfig;
    bind<T extends HttpRequest>(arg0: T): T;
    contentRequest(arg0: string, arg1: URL): HttpContentRequest;
    contentRequest(arg0: string, arg1: string): HttpContentRequest;
    delete(arg0: URL): DeleteRequest;
    delete(arg0: string): DeleteRequest;
    execute(arg0: HttpRequest): HttpResponse;
    execute<R extends unknown>(arg0: HttpRequest, arg1: (param0: HttpResponse) => R): R;
    executeAndHandle<R extends unknown, T extends HttpRequest & HttpResponseHandler<R>>(arg0: T): R;
    get(arg0: URL): GetRequest;
    get(arg0: string): GetRequest;
    getConnectTimeout(): number;
    getCookieManager(): CookieManager;
    getProxyHandler(): ProxyHandler;
    getReadTimeout(): number;
    getRetryHandler(): RetryConfig;
    head(arg0: URL): HeadRequest;
    head(arg0: string): HeadRequest;
    isFollowRedirects(): boolean;
    isIgnoreInvalidSSL(): boolean;
    post(arg0: URL): PostRequest;
    post(arg0: string): PostRequest;
    put(arg0: URL): PutRequest;
    put(arg0: string): PutRequest;
    request(arg0: string, arg1: URL): HttpRequest;
    request(arg0: string, arg1: string): HttpRequest;
    setConnectTimeout(arg0: number): HttpClient;
    setCookieManager(arg0: CookieManager): HttpClient;
    setExecutor(arg0: (param0: HttpClient) => RequestExecutor): HttpClient;
    setFollowRedirects(arg0: boolean): HttpClient;
    setIgnoreInvalidSSL(arg0: boolean): HttpClient;
    setProxyHandler(arg0: ProxyHandler): HttpClient;
    setReadTimeout(arg0: number): HttpClient;
    setRetryConfig(arg0: RetryConfig): HttpClient;
    setRetryHandler(arg0: RetryConfig): HttpClient;
    toString(): string;
}