import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufHolder } from '../../../../io/netty/buffer/ByteBufHolder.d.ts'
import type { DefaultAddressedEnvelope } from '../../../../io/netty/channel/DefaultAddressedEnvelope.d.ts'
import type { DomainSocketAddress } from '../../../../io/netty/channel/unix/DomainSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DomainDatagramPacket extends DefaultAddressedEnvelope<ByteBuf, DomainSocketAddress> implements ByteBufHolder {
    constructor(arg0: ByteBuf, arg1: DomainSocketAddress)
    constructor(arg0: ByteBuf, arg1: DomainSocketAddress, arg2: DomainSocketAddress)
    copy(): DomainDatagramPacket;
    duplicate(): DomainDatagramPacket;
    replace(arg0: ByteBuf): DomainDatagramPacket;
    retain(): DomainDatagramPacket;
    retain(arg0: number): DomainDatagramPacket;
    retainedDuplicate(): DomainDatagramPacket;
    touch(): DomainDatagramPacket;
    touch(arg0: Object): DomainDatagramPacket;
}