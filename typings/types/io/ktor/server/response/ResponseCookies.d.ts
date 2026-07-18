import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Cookie } from '../../../../io/ktor/http/Cookie.d.ts'
import type { CookieEncoding } from '../../../../io/ktor/http/CookieEncoding.d.ts'
import type { PipelineResponse } from '../../../../io/ktor/server/response/PipelineResponse.d.ts'
import type { GMTDate } from '../../../../io/ktor/util/date/GMTDate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ResponseCookies extends Object {
    constructor(response: PipelineResponse)
    // private response: PipelineResponse;
    append(item: Cookie): void;
    append(name: string, value: string, encoding: CookieEncoding, maxAge: number | null, expires: GMTDate | null, domain: string | null, path: string | null, secure: boolean, httpOnly: boolean, extensions: JavaMap<string, string | null>): void;
    appendExpired(name: string, domain: string | null, path: string | null): void;
    get(name: string): Cookie | null;
}