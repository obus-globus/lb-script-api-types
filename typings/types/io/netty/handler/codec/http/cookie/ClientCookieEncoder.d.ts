import type { Cookie } from '../../../../../../io/netty/handler/codec/http/cookie/Cookie.d.ts'
import type { CookieEncoder } from '../../../../../../io/netty/handler/codec/http/cookie/CookieEncoder.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
export class ClientCookieEncoder extends CookieEncoder {
    static LAX: ClientCookieEncoder;
    static STRICT: ClientCookieEncoder;
    private constructor(arg0: boolean)
    encode(arg0: Cookie[]): string;
    encode(arg0: Cookie): string;
    // private encode(arg0: StringBuilder, arg1: Cookie): void;
    encode(arg0: string, arg1: string): string;
}