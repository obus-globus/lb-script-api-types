import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { SocksAuthScheme } from '../../../../../io/netty/handler/codec/socks/SocksAuthScheme.d.ts'
import type { SocksRequest } from '../../../../../io/netty/handler/codec/socks/SocksRequest.d.ts'
export class SocksInitRequest extends SocksRequest {
    constructor(arg0: SocksAuthScheme[])
    // private authSchemes: SocksAuthScheme[];
    authSchemes(): SocksAuthScheme[];
    encodeAsByteBuf(arg0: ByteBuf): void;
}