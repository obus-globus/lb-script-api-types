import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToByteEncoder } from '../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
export class Varint21LengthFieldPrepender extends MessageToByteEncoder<ByteBuf> {
    static MAX_VARINT21_BYTES: number;
    constructor()
    encode(ctx: ChannelHandlerContext, msg: ByteBuf, out: ByteBuf): void;
}