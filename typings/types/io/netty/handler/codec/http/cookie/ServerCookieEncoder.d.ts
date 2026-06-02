import type { Cookie } from '../../../../../../io/netty/handler/codec/http/cookie/Cookie.d.ts'
import type { CookieEncoder } from '../../../../../../io/netty/handler/codec/http/cookie/CookieEncoder.d.ts'
export class ServerCookieEncoder extends CookieEncoder {
    static LAX: ServerCookieEncoder;
    static STRICT: ServerCookieEncoder;
    private constructor(arg0: boolean)
    encode(arg0: E[]): string[];
    encode(arg0: Cookie): string;
    encode(arg0: Cookie[]): string[];
    encode(arg0: string, arg1: string): string;
    encode(arg0: Cookie[]): string[];
}