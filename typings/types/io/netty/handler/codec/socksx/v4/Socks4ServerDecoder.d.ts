import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { ReplayingDecoder } from '../../../../../../io/netty/handler/codec/ReplayingDecoder.d.ts'
import type { Socks4CommandType } from '../../../../../../io/netty/handler/codec/socksx/v4/Socks4CommandType.d.ts'
import type { Socks4ServerDecoder$State } from '../../../../../../io/netty/handler/codec/socksx/v4/Socks4ServerDecoder$State.d.ts'
import type { Exception } from '../../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Socks4ServerDecoder extends ReplayingDecoder<Socks4ServerDecoder$State> {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    // private dstAddr: string;
    // private dstPort: number;
    // private type: Socks4CommandType;
    // private userId: string;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    // private fail(arg0: Object[], arg1: Exception): void;
}