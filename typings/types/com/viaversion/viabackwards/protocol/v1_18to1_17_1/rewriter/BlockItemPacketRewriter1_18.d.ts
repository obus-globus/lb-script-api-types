import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsItemRewriter.d.ts'
import type { Protocol1_18To1_17_1 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_18to1_17_1/Protocol1_18To1_17_1.d.ts'
import type { ServerboundPackets1_17 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ServerboundPackets1_17.d.ts'
import type { ClientboundPackets1_18 } from '../../../../../../com/viaversion/viaversion/protocols/v1_17_1to1_18/packet/ClientboundPackets1_18.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BlockItemPacketRewriter1_18 extends BackwardsItemRewriter<ClientboundPackets1_18, ServerboundPackets1_17, Protocol1_18To1_17_1> {
    constructor(arg0: Protocol1_18To1_17_1)
    // private handleSpawner(arg0: number, arg1: Map$Entry<string, Tag>[]): void;
    registerPackets(): void;
}