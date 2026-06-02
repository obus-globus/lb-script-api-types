import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_21_2To1_21 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_2to1_21/Protocol1_21_2To1_21.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ClientboundPacket1_21_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ClientboundPacket1_21_2.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class EntityPacketRewriter1_21_2 extends EntityRewriter<ClientboundPacket1_21_2, Protocol1_21_2To1_21> {
    constructor(arg0: Protocol1_21_2To1_21)
    // private warned: boolean;
    // private boatTypeFromEntityType(arg0: EntityType): number;
    // private chestBoatTypeFromEntityType(arg0: EntityType): number;
    // private fixOnGround(arg0: PacketWrapper): void;
    // private handleRelativeArguments(arg0: PacketWrapper, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
    onMappingDataLoaded(): void;
    registerPackets(): void;
    registerRewrites(): void;
    // private replaceColor(arg0: Map$Entry<string, Tag>[], arg1: string): void;
    // private sendSneakingPlayerCommand(arg0: PacketWrapper, arg1: boolean): void;
    typeFromId(arg0: number): EntityType;
    // private updateParticleFormat(arg0: Map$Entry<string, Tag>[], arg1: string): void;
    // private writePackedRotation(arg0: PacketWrapper, arg1: number, arg2: number): void;
}