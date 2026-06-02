import type { WrappedEntityData } from '../../../../../../com/viaversion/viabackwards/api/entities/storage/WrappedEntityData.d.ts'
import type { LegacyEntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/LegacyEntityRewriter.d.ts'
import type { Protocol1_11To1_10 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_11to1_10/Protocol1_11To1_10.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
export class EntityPacketRewriter1_11 extends LegacyEntityRewriter<ClientboundPackets1_9_3, Protocol1_11To1_10> {
    constructor(arg0: Protocol1_11To1_10)
    // private getHorseDataType(arg0: number): EntityData;
    // private getSkeletonTypeData(arg0: number): EntityData;
    // private getZombieTypeData(arg0: number): EntityData;
    // private handleZombieType(arg0: WrappedEntityData, arg1: number): void;
    objectTypeFromId(arg0: number, arg1: number): EntityType;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
}