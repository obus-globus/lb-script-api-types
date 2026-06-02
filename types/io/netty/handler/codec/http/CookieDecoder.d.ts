import type { Cookie } from '../../../../../io/netty/handler/codec/http/Cookie.d.ts'
import type { DefaultCookie } from '../../../../../io/netty/handler/codec/http/DefaultCookie.d.ts'
import type { InternalLogger } from '../../../../../io/netty/util/internal/logging/InternalLogger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CookieDecoder extends Object {
    static decode(paramarg0: string): Cookie[];
    static decode(paramarg0: string, paramarg1: boolean): Cookie[];
    private constructor(arg0: boolean)
    // private logger: InternalLogger;
    // private strict: boolean;
    // private doDecode(arg0: string): Cookie[];
    // private initCookie(arg0: string, arg1: string): DefaultCookie;
}