import type { Cookie } from '../../../../../io/netty/handler/codec/http/Cookie.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClientCookieEncoder extends Object {
    static encode(paramarg0: Cookie): string;
    static encode(...paramarg0: Cookie[]): string;
    static encode(paramarg0: Cookie[]): string;
    static encode(paramarg0: string, paramarg1: string): string;
    private constructor()
}