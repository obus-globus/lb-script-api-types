import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { SocksAuthScheme } from '../../../../../io/netty/handler/codec/socks/SocksAuthScheme.d.ts'
import type { SocksResponse } from '../../../../../io/netty/handler/codec/socks/SocksResponse.d.ts'
export class SocksInitResponse extends SocksResponse {
    constructor(arg0: SocksAuthScheme)
    // private authScheme: SocksAuthScheme;
    authScheme(): SocksAuthScheme;
    encodeAsByteBuf(arg0: ByteBuf): void;
}