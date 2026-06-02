import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { SocksAddressType } from '../../../../../io/netty/handler/codec/socks/SocksAddressType.d.ts'
import type { SocksCmdStatus } from '../../../../../io/netty/handler/codec/socks/SocksCmdStatus.d.ts'
import type { SocksResponse } from '../../../../../io/netty/handler/codec/socks/SocksResponse.d.ts'
export class SocksCmdResponse extends SocksResponse {
    constructor(arg0: SocksCmdStatus, arg1: SocksAddressType)
    constructor(arg0: SocksCmdStatus, arg1: SocksAddressType, arg2: string, arg3: number)
    // private addressType: SocksAddressType;
    // private cmdStatus: SocksCmdStatus;
    // private host: string;
    // private port: number;
    addressType(): SocksAddressType;
    cmdStatus(): SocksCmdStatus;
    encodeAsByteBuf(arg0: ByteBuf): void;
    host(): string;
    port(): number;
}