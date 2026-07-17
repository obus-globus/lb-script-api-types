import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { AbstractReferenceCounted } from '../../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { ReferenceCounted } from '../../../../io/netty/util/ReferenceCounted.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EncapsulatedPacket } from '../../../../org/cloudburstmc/netty/channel/raknet/packet/EncapsulatedPacket.d.ts'
export class SplitPacketHelper extends AbstractReferenceCounted {
    constructor(arg0: number)
    // private created: number;
    // private expectedLength: number;
    // private packets: JavaMap<any, any>;
    add(arg0: EncapsulatedPacket, arg1: ByteBufAllocator): EncapsulatedPacket;
    deallocate(): void;
    expired(): boolean;
    touch(): ReferenceCounted;
    touch(arg0: Object): ReferenceCounted;
}