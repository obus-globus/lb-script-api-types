import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageEncoder } from '../../../../../io/netty/handler/codec/MessageToMessageEncoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteArrayEncoder extends MessageToMessageEncoder<number[]> {
    constructor()
    encode(arg0: ChannelHandlerContext, arg1: number[], arg2: Object[]): void;
}