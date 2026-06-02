import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { ReplayingDecoder } from '../../../../../io/netty/handler/codec/ReplayingDecoder.d.ts'
import type { SocksAddressType } from '../../../../../io/netty/handler/codec/socks/SocksAddressType.d.ts'
import type { SocksCmdResponseDecoder$State } from '../../../../../io/netty/handler/codec/socks/SocksCmdResponseDecoder$State.d.ts'
import type { SocksCmdStatus } from '../../../../../io/netty/handler/codec/socks/SocksCmdStatus.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SocksCmdResponseDecoder extends ReplayingDecoder<SocksCmdResponseDecoder$State> {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    // private addressType: SocksAddressType;
    // private cmdStatus: SocksCmdStatus;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
}