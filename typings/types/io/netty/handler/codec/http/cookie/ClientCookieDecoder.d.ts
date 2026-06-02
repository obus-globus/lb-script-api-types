import type { Cookie } from '../../../../../../io/netty/handler/codec/http/cookie/Cookie.d.ts'
import type { CookieDecoder } from '../../../../../../io/netty/handler/codec/http/cookie/CookieDecoder.d.ts'
export class ClientCookieDecoder extends CookieDecoder {
    static LAX: ClientCookieDecoder;
    static STRICT: ClientCookieDecoder;
    private constructor(arg0: boolean)
    decode(arg0: string): Cookie;
}