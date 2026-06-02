import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageEncoder } from '../../../../io/netty/handler/codec/MessageToMessageEncoder.d.ts'
import type { ByteOrder } from '../../../../java/nio/ByteOrder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LengthFieldPrepender extends MessageToMessageEncoder<ByteBuf> {
    constructor(arg0: ByteOrder, arg1: number, arg2: number, arg3: boolean)
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: boolean)
    // private byteOrder: ByteOrder;
    // private lengthAdjustment: number;
    // private lengthFieldLength: number;
    // private lengthIncludesLengthFieldLength: boolean;
    encode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
}