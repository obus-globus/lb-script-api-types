import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { EntityTypes1_11$EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes1_11$EntityType.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Protocol1_10To1_11 } from '../../../../../../com/viaversion/viaversion/protocols/v1_10to1_11/Protocol1_10To1_11.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
export class EntityPacketRewriter1_11 extends EntityRewriter<ClientboundPackets1_9_3, Protocol1_10To1_11> {
    constructor(arg0: Protocol1_10To1_11)
    getById(arg0: EntityData[], arg1: number): Optional<EntityData>;
    objectTypeFromId(arg0: number, arg1: number): EntityType;
    registerPackets(): void;
    registerRewrites(): void;
    rewriteEntityType(arg0: number, arg1: EntityData[]): EntityTypes1_11$EntityType;
    // private tryFixFishingHookVelocity(arg0: PacketWrapper): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}