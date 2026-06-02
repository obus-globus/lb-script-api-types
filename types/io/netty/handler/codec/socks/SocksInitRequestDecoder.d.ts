import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { ReplayingDecoder } from '../../../../../io/netty/handler/codec/ReplayingDecoder.d.ts'
import type { SocksInitRequestDecoder$State } from '../../../../../io/netty/handler/codec/socks/SocksInitRequestDecoder$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SocksInitRequestDecoder extends ReplayingDecoder<SocksInitRequestDecoder$State> {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
}