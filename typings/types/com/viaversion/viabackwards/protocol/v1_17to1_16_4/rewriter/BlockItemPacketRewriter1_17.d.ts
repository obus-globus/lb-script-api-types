import type { BackwardsItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsItemRewriter.d.ts'
import type { Protocol1_17To1_16_4 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_17to1_16_4/Protocol1_17To1_16_4.d.ts'
import type { ServerboundPackets1_16_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/packet/ServerboundPackets1_16_2.d.ts'
import type { ClientboundPackets1_17 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ClientboundPackets1_17.d.ts'
import type { BitSet } from '../../../../../../java/util/BitSet.d.ts'
export class BlockItemPacketRewriter1_17 extends BackwardsItemRewriter<ClientboundPackets1_17, ServerboundPackets1_16_2, Protocol1_17To1_16_4> {
    constructor(arg0: Protocol1_17To1_16_4)
    // private cutLightMask(arg0: number[], arg1: number): number;
    // private cutMask(arg0: BitSet, arg1: number, arg2: boolean): number;
    registerPackets(): void;
}