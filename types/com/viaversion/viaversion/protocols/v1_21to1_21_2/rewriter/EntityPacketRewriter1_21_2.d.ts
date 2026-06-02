import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ClientboundPacket1_21 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/packet/ClientboundPacket1_21.d.ts'
import type { Protocol1_21To1_21_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/Protocol1_21To1_21_2.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_21_2 extends EntityRewriter<ClientboundPacket1_21, Protocol1_21To1_21_2> {
    constructor(arg0: Protocol1_21To1_21_2)
    // private isVF: boolean;
    // private entityTypeFromBoatType(arg0: number): EntityType;
    // private entityTypeFromChestBoatType(arg0: number): EntityType;
    handleEntityData(arg0: number, arg1: EntityData[], arg2: UserConnection): void;
    // private handleOnGround(arg0: PacketWrapper): void;
    registerPackets(): void;
    registerRewrites(): void;
    // private storeEntityPositionRotation(arg0: PacketWrapper, arg1: boolean, arg2: boolean): void;
    typeFromId(arg0: number): EntityType;
}