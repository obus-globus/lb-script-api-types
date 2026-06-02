import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToByteEncoder } from '../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { Deflater } from '../../../java/util/zip/Deflater.d.ts'
export class CompressionEncoder extends MessageToByteEncoder<ByteBuf> {
    constructor(threshold: number)
    // private deflater: Deflater;
    // private encodeBuf: number[];
    readonly threshold: number;
    encode(ctx: ChannelHandlerContext, uncompressed: ByteBuf, out: ByteBuf): void;
    getThreshold(): number;
    setThreshold(threshold: number): void;
}