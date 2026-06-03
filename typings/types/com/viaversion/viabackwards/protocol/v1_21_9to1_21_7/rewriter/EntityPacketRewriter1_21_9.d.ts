import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_21_9To1_21_7 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_9to1_21_7/Protocol1_21_9To1_21_7.d.ts'
import type { MannequinData } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_9to1_21_7/storage/MannequinData.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { GameProfile$Property } from '../../../../../../com/viaversion/viaversion/api/minecraft/GameProfile$Property.d.ts'
import type { Vector3d } from '../../../../../../com/viaversion/viaversion/api/minecraft/Vector3d.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ClientboundPacket1_21_9 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ClientboundPacket1_21_9.d.ts'
export class EntityPacketRewriter1_21_9 extends EntityRewriter<ClientboundPacket1_21_9, Protocol1_21_9To1_21_7> {
    constructor(arg0: Protocol1_21_9To1_21_7)
    handleEntityData(arg0: number, arg1: EntityData[], arg2: UserConnection): void;
    onMappingDataLoaded(): void;
    // private randomHackyEmptyName(): string;
    registerPackets(): void;
    registerRewrites(): void;
    // private sendInitialPlayerInfoUpdate(arg0: UserConnection, arg1: MannequinData, arg2: GameProfile$Property[]): void;
    // private sendPlayerInfoDisplayNameUpdate(arg0: UserConnection, arg1: MannequinData, arg2: Tag): void;
    // private sendPlayerTeamDisplayName(arg0: UserConnection, arg1: MannequinData, arg2: Tag): void;
    // private storeMovementMannequinData(arg0: PacketWrapper, arg1: boolean, arg2: boolean): void;
    // private storePlayerRotation(arg0: PacketWrapper): void;
    // private trackMannequinTeleport(arg0: PacketWrapper): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
    // private writeMovementShorts(arg0: PacketWrapper, arg1: Vector3d): void;
}