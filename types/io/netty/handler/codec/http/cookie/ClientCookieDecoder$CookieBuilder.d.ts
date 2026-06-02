import type { Cookie } from '../../../../../../io/netty/handler/codec/http/cookie/Cookie.d.ts'
import type { CookieHeaderNames$SameSite } from '../../../../../../io/netty/handler/codec/http/cookie/CookieHeaderNames$SameSite.d.ts'
import type { DefaultCookie } from '../../../../../../io/netty/handler/codec/http/cookie/DefaultCookie.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ClientCookieDecoder$CookieBuilder extends Object {
    constructor(arg0: DefaultCookie, arg1: string)
    // private cookie: DefaultCookie;
    // private domain: string;
    // private expiresEnd: number;
    // private expiresStart: number;
    // private header: string;
    // private httpOnly: boolean;
    // private maxAge: number;
    // private partitioned: boolean;
    // private path: string;
    // private sameSite: CookieHeaderNames$SameSite;
    // private secure: boolean;
    appendAttribute(arg0: number, arg1: number, arg2: number, arg3: number): void;
    // private computeValue(arg0: number, arg1: number): string;
    cookie(): Cookie;
    // private mergeMaxAgeAndExpires(): number;
    // private parse11(arg0: number): void;
    // private parse4(arg0: number, arg1: number, arg2: number): void;
    // private parse6(arg0: number, arg1: number, arg2: number): void;
    // private parse7(arg0: number, arg1: number, arg2: number): void;
    // private parse8(arg0: number, arg1: number, arg2: number): void;
    // private setMaxAge(arg0: string): void;
}