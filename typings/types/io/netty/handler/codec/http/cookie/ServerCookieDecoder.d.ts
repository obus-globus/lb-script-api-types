import type { Cookie } from '../../../../../../io/netty/handler/codec/http/cookie/Cookie.d.ts'
import type { CookieDecoder } from '../../../../../../io/netty/handler/codec/http/cookie/CookieDecoder.d.ts'
export class ServerCookieDecoder extends CookieDecoder {
    static LAX: ServerCookieDecoder;
    static STRICT: ServerCookieDecoder;
    private constructor(arg0: boolean)
    decode(arg0: string): Cookie[];
    // private decode(arg0: Cookie[], arg1: string): void;
    decodeAll(arg0: string): Cookie[];
}