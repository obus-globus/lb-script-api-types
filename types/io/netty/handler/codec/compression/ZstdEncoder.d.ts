import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToByteEncoder } from '../../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
export class ZstdEncoder extends MessageToByteEncoder<ByteBuf> {
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: number)
    // private blockSize: number;
    // private buffer: ByteBuf;
    // private compressionLevel: number;
    // private maxEncodeSize: number;
    allocateBuffer(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: boolean): ByteBuf;
    encode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: ByteBuf): void;
    flush(arg0: ChannelHandlerContext): void;
    // private flushBufferedData(arg0: ByteBuf): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
}