import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { DatagramPacket } from '../../../../../io/netty/channel/socket/DatagramPacket.d.ts'
import type { MessageToMessageCodec } from '../../../../../io/netty/handler/codec/MessageToMessageCodec.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DatagramCodec extends MessageToMessageCodec<DatagramPacket, ByteBuf> {
    static NAME: string;
    constructor()
    constructor(arg0: InetSocketAddress)
    // private remoteAddress: InetSocketAddress;
    decode(arg0: ChannelHandlerContext, arg1: DatagramPacket, arg2: Object[]): void;
    encode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
}