import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder } from '../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { ReplayingDecoderByteBuf } from '../../../../io/netty/handler/codec/ReplayingDecoderByteBuf.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ReplayingDecoder<S extends Object | number | string | boolean> extends ByteToMessageDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    constructor(arg0: S)
    // private checkpoint: number;
    // private replayable: ReplayingDecoderByteBuf;
    // private state: S;
    callDecode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    channelInputClosed(arg0: ChannelHandlerContext, arg1: Object[]): void;
    checkpoint(): void;
    checkpoint(arg0: S): void;
    state(): S;
    state(arg0: S): S;
}