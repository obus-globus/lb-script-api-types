import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { CookieManager } from '../../../../../java/net/CookieManager.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HttpClient } from '../../../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { HttpRequest } from '../../../../../net/lenni0451/commons/httpclient/requests/HttpRequest.d.ts'
export abstract class RequestExecutor extends Object {
    constructor(arg0: HttpClient)
    // private client: HttpClient;
    execute(arg0: HttpRequest): HttpResponse;
    getCookieManager(arg0: HttpRequest): CookieManager;
    getHeaders(arg0: HttpRequest, arg1: CookieManager): JavaMap<string, string[]>;
    getHeaders(arg0: HttpRequest, arg1: CookieManager, arg2: boolean): JavaMap<string, string[]>;
    isFollowRedirects(arg0: HttpRequest): boolean;
    isIgnoreInvalidSSL(arg0: HttpRequest): boolean;
    setHeaders(arg0: JavaMap<string, string[]>, arg1: (param0: string, param1: string) => void, arg2: (param0: string, param1: string) => void): void;
    updateCookies(arg0: CookieManager, arg1: URL, arg2: JavaMap<string, string[]>): void;
}