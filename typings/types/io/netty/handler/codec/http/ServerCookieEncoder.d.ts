import type { Cookie } from '../../../../../io/netty/handler/codec/http/Cookie.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ServerCookieEncoder extends Object {
    static encode(paramarg0: Cookie): string;
    static encode(paramarg0: string, paramarg1: string): string;
    static encode(paramarg0: (Object | null)[]): string[];
    static encode(paramarg0: Cookie[]): string[];
    static encode(paramarg0: Cookie[]): string[];
    private constructor()
}