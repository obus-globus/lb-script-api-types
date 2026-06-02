import type { HttpRequest$Builder } from '../../../../java/net/http/HttpRequest$Builder.d.ts'
import type { HttpResponse } from '../../../../java/net/http/HttpResponse.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CookieStore extends Object {
    static parse(paramarg0: string): CookieStore;
    constructor(arg0: { [key: string]: string })
    // private values: { [key: string]: string };
    appendCookies(arg0: HttpRequest$Builder): HttpRequest$Builder;
    getMap(): { [key: string]: string };
    merge(arg0: CookieStore): void;
    mergeFromResponse(arg0: HttpResponse<Object>): void;
    toString(): string;
}