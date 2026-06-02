import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_13 } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ClientboundPackets1_13.d.ts'
import type { Protocol1_13_2To1_14 } from '../../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/Protocol1_13_2To1_14.d.ts'
import type { EntityTracker1_14 } from '../../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/storage/EntityTracker1_14.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_14 extends EntityRewriter<ClientboundPackets1_13, Protocol1_13_2To1_14> {
    static recalculatePlayerPose(paramarg0: number, paramarg1: EntityTracker1_14): number;
    constructor(arg0: Protocol1_13_2To1_14)
    onMappingDataLoaded(): void;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
}