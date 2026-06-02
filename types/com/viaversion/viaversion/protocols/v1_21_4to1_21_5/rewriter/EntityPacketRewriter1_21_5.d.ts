import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { RegistryEntry } from '../../../../../../com/viaversion/viaversion/api/minecraft/RegistryEntry.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Protocol1_21_4To1_21_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/Protocol1_21_4To1_21_5.d.ts'
import type { ClientboundPacket1_21_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ClientboundPacket1_21_2.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
import type { EntityDataHandlerEvent } from '../../../../../../com/viaversion/viaversion/rewriter/entitydata/EntityDataHandlerEvent.d.ts'
export class EntityPacketRewriter1_21_5 extends EntityRewriter<ClientboundPacket1_21_2, Protocol1_21_4To1_21_5> {
    constructor(arg0: Protocol1_21_4To1_21_5)
    // private collisionId(arg0: string): number;
    // private playShieldSound(arg0: PacketWrapper, arg1: number, arg2: number, arg3: number): void;
    registerPackets(): void;
    registerRewrites(): void;
    // private sendEntityVariants(arg0: UserConnection, arg1: string, arg2: string, arg3: boolean, arg4: string[]): void;
    // private sendSaddleEquipment(arg0: EntityDataHandlerEvent, arg1: boolean): void;
    typeFromId(arg0: number): EntityType;
    // private visibilityId(arg0: string): number;
    // private wolfSoundVariant(): RegistryEntry;
}