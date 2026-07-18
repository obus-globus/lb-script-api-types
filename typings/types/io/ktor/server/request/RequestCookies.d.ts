import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { CookieEncoding } from '../../../../io/ktor/http/CookieEncoding.d.ts'
import type { ApplicationRequest } from '../../../../io/ktor/server/request/ApplicationRequest.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../kotlin/Pair.d.ts'
export class RequestCookies extends Object {
    constructor(request: ApplicationRequest)
    // private map: JavaMap<Pair<CookieEncoding, string>, string>;
    readonly rawCookies: JavaMap<string, string>;
    // private request: ApplicationRequest;
    // private /*not mapped: */ getRequest(): ApplicationRequest;
    protected fetchCookies(): JavaMap<string, string>;
    get(name: string, encoding: CookieEncoding): string | null;
}