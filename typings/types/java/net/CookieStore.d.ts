import type { HttpCookie } from '../../java/net/HttpCookie.d.ts'
import type { URI } from '../../java/net/URI.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface CookieStore extends Object{
    add(arg0: URI, arg1: HttpCookie): void;
    get(arg0: URI): HttpCookie[];
    getCookies(): HttpCookie[];
    getURIs(): URI[];
    remove(arg0: URI, arg1: HttpCookie): boolean;
    removeAll(): boolean;
}