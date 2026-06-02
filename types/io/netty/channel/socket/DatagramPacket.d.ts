import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufHolder } from '../../../../io/netty/buffer/ByteBufHolder.d.ts'
import type { DefaultAddressedEnvelope } from '../../../../io/netty/channel/DefaultAddressedEnvelope.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DatagramPacket extends DefaultAddressedEnvelope<ByteBuf, InetSocketAddress> implements ByteBufHolder {
    constructor(arg0: ByteBuf, arg1: InetSocketAddress)
    constructor(arg0: ByteBuf, arg1: InetSocketAddress, arg2: InetSocketAddress)
    copy(): DatagramPacket;
    duplicate(): DatagramPacket;
    replace(arg0: ByteBuf): DatagramPacket;
    retain(): DatagramPacket;
    retain(arg0: number): DatagramPacket;
    retainedDuplicate(): DatagramPacket;
    touch(): DatagramPacket;
    touch(arg0: Object): DatagramPacket;
}