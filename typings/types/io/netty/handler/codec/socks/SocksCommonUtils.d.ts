import type { SocksRequest } from '../../../../../io/netty/handler/codec/socks/SocksRequest.d.ts'
import type { SocksResponse } from '../../../../../io/netty/handler/codec/socks/SocksResponse.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SocksCommonUtils extends Object {
    static UNKNOWN_SOCKS_REQUEST: SocksRequest;
    static UNKNOWN_SOCKS_RESPONSE: SocksResponse;
    static ipv6toStr(paramarg0: number[]): string;
    private constructor()
}