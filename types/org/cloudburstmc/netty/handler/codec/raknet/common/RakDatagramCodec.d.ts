import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageCodec } from '../../../../../../../io/netty/handler/codec/MessageToMessageCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RakDatagramPacket } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/packet/RakDatagramPacket.d.ts'
export class RakDatagramCodec extends MessageToMessageCodec<ByteBuf, RakDatagramPacket> {
    static NAME: string;
    constructor()
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    encode(arg0: ChannelHandlerContext, arg1: RakDatagramPacket, arg2: Object[]): void;
}