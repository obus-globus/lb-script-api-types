import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { SocksResponse } from '../../../../../io/netty/handler/codec/socks/SocksResponse.d.ts'
export class UnknownSocksResponse extends SocksResponse {
    constructor()
    encodeAsByteBuf(arg0: ByteBuf): void;
}