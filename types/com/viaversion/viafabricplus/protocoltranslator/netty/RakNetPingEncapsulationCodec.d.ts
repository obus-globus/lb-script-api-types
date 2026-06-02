import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageCodec } from '../../../../../io/netty/handler/codec/MessageToMessageCodec.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RakPong } from '../../../../../org/cloudburstmc/netty/channel/raknet/RakPong.d.ts'
export class RakNetPingEncapsulationCodec extends MessageToMessageCodec<RakPong, ByteBuf> {
    static NAME: string;
    constructor(arg0: InetSocketAddress)
    // private remoteAddress: InetSocketAddress;
    decode(arg0: ChannelHandlerContext, arg1: RakPong, arg2: Object[]): void;
    encode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
}