import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Cookie } from '../../../io/ktor/http/Cookie.d.ts'
import type { CookieEncoding } from '../../../io/ktor/http/CookieEncoding.d.ts'
import type { GMTDate } from '../../../io/ktor/util/date/GMTDate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CookieKt extends Object {
    static decodeCookieValue(encodedValue: string, encoding: CookieEncoding): string;
    static encodeCookieValue(value: string, encoding: CookieEncoding): string;
    static parseClientCookiesHeader(cookiesHeader: string, skipEscaped: boolean): JavaMap<string, string>;
    static parseServerSetCookieHeader(cookiesHeader: string): Cookie;
    static renderCookieHeader(cookie: Cookie): string;
    static renderSetCookieHeader(cookie: Cookie): string;
    static renderSetCookieHeader(name: string, value: string, encoding: CookieEncoding, maxAge: number | null, expires: GMTDate | null, domain: string | null, path: string | null, secure: boolean, httpOnly: boolean, extensions: JavaMap<string, string | null>, includeEncoding: boolean): string;
}