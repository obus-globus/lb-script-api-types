import type { CookieStore } from '../../../../de/florianreuth/classic4j/util/CookieStore.d.ts'
import type { HttpClient } from '../../../../java/net/http/HttpClient.d.ts'
import type { HttpRequest } from '../../../../java/net/http/HttpRequest.d.ts'
import type { HttpRequest$Builder } from '../../../../java/net/http/HttpRequest$Builder.d.ts'
import type { HttpResponse } from '../../../../java/net/http/HttpResponse.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HttpClientUtils extends Object {
    static HTTP_CLIENT: HttpClient;
    static buildWithCookies(paramarg0: CookieStore, paramarg1: HttpRequest$Builder): HttpRequest;
    static createRequestBody(...paramarg0: (Object | null)[]): string;
    static updateCookies(paramarg0: CookieStore, paramarg1: HttpResponse<Object>): void;
    constructor()
}