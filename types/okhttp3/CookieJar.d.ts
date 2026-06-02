import type { Object } from '../java/lang/Object.d.ts'
import type { Cookie } from '../okhttp3/Cookie.d.ts'
import type { HttpUrl } from '../okhttp3/HttpUrl.d.ts'
export interface CookieJar extends Object{
    loadForRequest(url: HttpUrl): Cookie[];
    saveFromResponse(url: HttpUrl, cookies: Cookie[]): void;
}