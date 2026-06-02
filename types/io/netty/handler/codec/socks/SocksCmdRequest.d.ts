import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { SocksAddressType } from '../../../../../io/netty/handler/codec/socks/SocksAddressType.d.ts'
import type { SocksCmdType } from '../../../../../io/netty/handler/codec/socks/SocksCmdType.d.ts'
import type { SocksRequest } from '../../../../../io/netty/handler/codec/socks/SocksRequest.d.ts'
export class SocksCmdRequest extends SocksRequest {
    constructor(arg0: SocksCmdType, arg1: SocksAddressType, arg2: string, arg3: number)
    // private addressType: SocksAddressType;
    // private cmdType: SocksCmdType;
    // private host: string;
    // private port: number;
    addressType(): SocksAddressType;
    cmdType(): SocksCmdType;
    encodeAsByteBuf(arg0: ByteBuf): void;
    host(): string;
    port(): number;
}