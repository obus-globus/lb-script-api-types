import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ByteToMessageDecoder extends ChannelInboundHandlerAdapter {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    // private cumulation: ByteBuf;
    readonly cumulator: ByteToMessageDecoder$Cumulator;
    // private decodeState: number;
    readonly discardAfterReads: number;
    // private firedChannelRead: boolean;
    // private first: boolean;
    // private numReads: number;
    // private selfFiredChannelRead: boolean;
    readonly singleDecode: boolean;
    actualReadableBytes(): number;
    callDecode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    channelInactive(arg0: ChannelHandlerContext): void;
    // private channelInputClosed(arg0: ChannelHandlerContext, arg1: boolean): void;
    channelInputClosed(arg0: ChannelHandlerContext, arg1: Object[]): void;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    decodeLast(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    decodeRemovalReentryProtection(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    discardSomeReadBytes(): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    handlerRemoved0(arg0: ChannelHandlerContext): void;
    internalBuffer(): ByteBuf;
    isSingleDecode(): boolean;
    setCumulator(arg0: ByteToMessageDecoder$Cumulator): void;
    setDiscardAfterReads(arg0: number): void;
    setSingleDecode(arg0: boolean): void;
    userEventTriggered(arg0: ChannelHandlerContext, arg1: Object): void;
}