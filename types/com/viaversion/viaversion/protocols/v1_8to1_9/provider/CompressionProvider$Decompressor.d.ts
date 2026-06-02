import type { CompressionProvider$CompressionHandler } from '../../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/provider/CompressionProvider$CompressionHandler.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageDecoder } from '../../../../../../io/netty/handler/codec/MessageToMessageDecoder.d.ts'
import type { Inflater } from '../../../../../../java/util/zip/Inflater.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CompressionProvider$Decompressor extends MessageToMessageDecoder<ByteBuf> implements CompressionProvider$CompressionHandler {
    constructor(arg0: number)
    // private inflater: Inflater;
    // private threshold: number;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    setCompressionThreshold(arg0: number): void;
}