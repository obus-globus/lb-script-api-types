import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { CookieManager } from '../../../../../java/net/CookieManager.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HeaderStore } from '../../../../../net/lenni0451/commons/httpclient/HeaderStore.d.ts'
import type { HttpClient } from '../../../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { HttpResponseHandler } from '../../../../../net/lenni0451/commons/httpclient/handler/HttpResponseHandler.d.ts'
import type { HttpRequest$FollowRedirects } from '../../../../../net/lenni0451/commons/httpclient/requests/HttpRequest$FollowRedirects.d.ts'
import type { RetryConfig } from '../../../../../net/lenni0451/commons/httpclient/retry/RetryConfig.d.ts'
import type { ResettableStorage } from '../../../../../net/lenni0451/commons/httpclient/utils/ResettableStorage.d.ts'
export class HttpRequest extends HeaderStore<HttpRequest> {
    constructor(arg0: string, arg1: URL)
    constructor(arg0: string, arg1: string)
    // private boundClient: WeakReference<HttpClient>;
    readonly cookieManager: ResettableStorage<CookieManager>;
    readonly followRedirects: HttpRequest$FollowRedirects;
    readonly ignoreInvalidSSL: ResettableStorage<boolean>;
    readonly method: string;
    readonly retryHandler: ResettableStorage<RetryConfig>;
    readonly streamedRequest: boolean;
    readonly streamedResponse: boolean;
    // private url: URL;
    bind(arg0: HttpClient): HttpRequest;
    execute(): HttpResponse;
    execute<R extends unknown>(arg0: (param0: HttpResponse) => R): R;
    getCookieManager(): CookieManager;
    getFollowRedirects(): HttpRequest$FollowRedirects;
    getIgnoreInvalidSSL(): boolean;
    getMethod(): string;
    getRetryHandler(): RetryConfig;
    getURL(): URL;
    isCookieManagerSet(): boolean;
    isIgnoreInvalidSSLSet(): boolean;
    isRetryHandlerSet(): boolean;
    isStreamedRequest(): boolean;
    isStreamedResponse(): boolean;
    setCookieManager(arg0: CookieManager): HttpRequest;
    setFollowRedirects(arg0: boolean): HttpRequest;
    setFollowRedirects(arg0: HttpRequest$FollowRedirects): HttpRequest;
    setIgnoreInvalidSSL(arg0: boolean): HttpRequest;
    setRetryHandler(arg0: RetryConfig): HttpRequest;
    setStreamedRequest(arg0: boolean): HttpRequest;
    setStreamedResponse(arg0: boolean): HttpRequest;
    unsetCookieManager(): HttpRequest;
    unsetIgnoreInvalidSSL(): HttpRequest;
    unsetRetryHandler(): HttpRequest;
}