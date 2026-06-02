import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { SocksRequest } from '../../../../../io/netty/handler/codec/socks/SocksRequest.d.ts'
export class SocksAuthRequest extends SocksRequest {
    constructor(arg0: string, arg1: string)
    // private password: string;
    // private username: string;
    encodeAsByteBuf(arg0: ByteBuf): void;
    password(): string;
    username(): string;
}