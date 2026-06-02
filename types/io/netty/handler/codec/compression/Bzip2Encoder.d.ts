import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { MessageToByteEncoder } from '../../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { Bzip2BitWriter } from '../../../../../io/netty/handler/codec/compression/Bzip2BitWriter.d.ts'
import type { Bzip2BlockCompressor } from '../../../../../io/netty/handler/codec/compression/Bzip2BlockCompressor.d.ts'
import type { Bzip2Encoder$State } from '../../../../../io/netty/handler/codec/compression/Bzip2Encoder$State.d.ts'
export class Bzip2Encoder extends MessageToByteEncoder<ByteBuf> {
    constructor()
    constructor(arg0: number)
    // private blockCompressor: Bzip2BlockCompressor;
    // private ctx: ChannelHandlerContext;
    // private currentState: Bzip2Encoder$State;
    // private finished: boolean;
    // private streamBlockSize: number;
    // private streamCRC: number;
    // private writer: Bzip2BitWriter;
    close(): ChannelFuture;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    close(arg0: ChannelPromise): ChannelFuture;
    // private closeBlock(arg0: ByteBuf): void;
    // private ctx(): ChannelHandlerContext;
    encode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: ByteBuf): void;
    // private finishEncode(arg0: ChannelHandlerContext, arg1: ChannelPromise): ChannelFuture;
    handlerAdded(arg0: ChannelHandlerContext): void;
    isClosed(): boolean;
}