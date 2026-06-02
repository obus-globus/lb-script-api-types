import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufHolder } from '../../../../io/netty/buffer/ByteBufHolder.d.ts'
import type { ChannelFutureListener } from '../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelHandler } from '../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageDecoder } from '../../../../io/netty/handler/codec/MessageToMessageDecoder.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export abstract class MessageAggregator<I extends Object | number | string | boolean, S extends Object | number | string | boolean, C extends ByteBufHolder, O extends ByteBufHolder> extends MessageToMessageDecoder<I> {
    constructor(arg0: number)
    constructor(arg0: number, arg1: Class<I>)
    // private aggregating: boolean;
    // private continueResponseWriteListener: ChannelFutureListener;
    // private ctx: ChannelHandlerContext;
    // private currentMessage: O;
    // private handleIncompleteAggregateDuringClose: boolean;
    readonly handlingOversizedMessage: boolean;
    // private maxContentLength: number;
    readonly maxCumulationBufferComponents: number;
    acceptInboundMessage(arg0: Object): boolean;
    aggregate(arg0: O, arg1: C): void;
    beginAggregation(arg0: S, arg1: ByteBuf): O;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    closeAfterContinueResponse(arg0: Object): boolean;
    ctx(): ChannelHandlerContext;
    decode(arg0: ChannelHandlerContext, arg1: I, arg2: Object[]): void;
    finishAggregation(arg0: O): void;
    // private finishAggregation0(arg0: O): void;
    handleOversizedMessage(arg0: ChannelHandlerContext, arg1: S): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    ignoreContentAfterContinueResponse(arg0: Object): boolean;
    // private invokeHandleOversizedMessage(arg0: ChannelHandlerContext, arg1: S): void;
    isAggregated(arg0: I): boolean;
    isContentLengthInvalid(arg0: S, arg1: number): boolean;
    isContentMessage(arg0: I): boolean;
    isHandlingOversizedMessage(): boolean;
    isLastContentMessage(arg0: C): boolean;
    isStartMessage(arg0: I): boolean;
    maxContentLength(): number;
    maxCumulationBufferComponents(): number;
    newContinueResponse(arg0: S, arg1: number, arg2: Map$Entry<string, ChannelHandler>[]): Object;
    releaseCurrentMessage(): void;
    setMaxCumulationBufferComponents(arg0: number): void;
}