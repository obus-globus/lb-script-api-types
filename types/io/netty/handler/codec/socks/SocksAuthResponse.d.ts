import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { SocksAuthStatus } from '../../../../../io/netty/handler/codec/socks/SocksAuthStatus.d.ts'
import type { SocksResponse } from '../../../../../io/netty/handler/codec/socks/SocksResponse.d.ts'
export class SocksAuthResponse extends SocksResponse {
    constructor(arg0: SocksAuthStatus)
    // private authStatus: SocksAuthStatus;
    authStatus(): SocksAuthStatus;
    encodeAsByteBuf(arg0: ByteBuf): void;
}