import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToByteEncoder } from '../../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { Snappy } from '../../../../../io/netty/handler/codec/compression/Snappy.d.ts'
export class SnappyFrameEncoder extends MessageToByteEncoder<ByteBuf> {
    static snappyEncoderWithJumboFrames(): SnappyFrameEncoder;
    constructor()
    private constructor(arg0: number)
    // private sliceSize: number;
    // private snappy: Snappy;
    // private started: boolean;
    encode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: ByteBuf): void;
}