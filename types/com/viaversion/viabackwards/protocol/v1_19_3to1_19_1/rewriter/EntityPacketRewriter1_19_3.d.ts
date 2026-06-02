import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_19_3To1_19_1 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_19_3to1_19_1/Protocol1_19_3To1_19_1.d.ts'
import type { EntityPacketRewriter1_19_3$PlayerProfileUpdate } from '../../../../../../com/viaversion/viabackwards/protocol/v1_19_3to1_19_1/rewriter/EntityPacketRewriter1_19_3$PlayerProfileUpdate.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_19_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_1to1_19_3/packet/ClientboundPackets1_19_3.d.ts'
export class EntityPacketRewriter1_19_3 extends EntityRewriter<ClientboundPackets1_19_3, Protocol1_19_3To1_19_1> {
    constructor(arg0: Protocol1_19_3To1_19_1)
    onMappingDataLoaded(): void;
    registerPackets(): void;
    registerRewrites(): void;
    // private sendPlayerProfileUpdate(arg0: UserConnection, arg1: number, arg2: EntityPacketRewriter1_19_3$PlayerProfileUpdate[]): void;
    typeFromId(arg0: number): EntityType;
}