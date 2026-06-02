import type { CompressionProvider$CompressionHandler } from '../../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/provider/CompressionProvider$CompressionHandler.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToByteEncoder } from '../../../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { Deflater } from '../../../../../../java/util/zip/Deflater.d.ts'
export class CompressionProvider$Compressor extends MessageToByteEncoder<ByteBuf> implements CompressionProvider$CompressionHandler {
    constructor(arg0: number)
    // private deflater: Deflater;
    // private threshold: number;
    encode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: ByteBuf): void;
    setCompressionThreshold(arg0: number): void;
}