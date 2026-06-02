import type { DefaultCookie } from '../../../../../../io/netty/handler/codec/http/cookie/DefaultCookie.d.ts'
import type { InternalLogger } from '../../../../../../io/netty/util/internal/logging/InternalLogger.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class CookieDecoder extends Object {
    constructor(arg0: boolean)
    // private logger: InternalLogger;
    // private strict: boolean;
    initCookie(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number): DefaultCookie;
}