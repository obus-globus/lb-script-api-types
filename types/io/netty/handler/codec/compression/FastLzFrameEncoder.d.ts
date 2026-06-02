import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToByteEncoder } from '../../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { ByteBufChecksum } from '../../../../../io/netty/handler/codec/compression/ByteBufChecksum.d.ts'
import type { Checksum } from '../../../../../java/util/zip/Checksum.d.ts'
export class FastLzFrameEncoder extends MessageToByteEncoder<ByteBuf> {
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: number)
    constructor(arg0: number, arg1: Checksum)
    // private checksum: ByteBufChecksum;
    // private level: number;
    encode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: ByteBuf): void;
}