import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { SocksRequest } from '../../../../../io/netty/handler/codec/socks/SocksRequest.d.ts'
export class UnknownSocksRequest extends SocksRequest {
    constructor()
    encodeAsByteBuf(arg0: ByteBuf): void;
}