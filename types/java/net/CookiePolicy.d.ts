import type { HttpCookie } from '../../java/net/HttpCookie.d.ts'
import type { URI } from '../../java/net/URI.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface CookiePolicy extends Object{
    shouldAccept(arg0: URI, arg1: HttpCookie): boolean;
}