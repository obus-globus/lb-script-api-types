import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_21To1_20_5 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21to1_20_5/Protocol1_21To1_20_5.d.ts'
import type { EntityPacketRewriter1_21$PaintingData } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21to1_20_5/rewriter/EntityPacketRewriter1_21$PaintingData.d.ts'
import type { RegistryEntry } from '../../../../../../com/viaversion/viaversion/api/minecraft/RegistryEntry.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ClientboundPacket1_21 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/packet/ClientboundPacket1_21.d.ts'
export class EntityPacketRewriter1_21 extends EntityRewriter<ClientboundPacket1_21, Protocol1_21To1_20_5> {
    constructor(arg0: Protocol1_21To1_20_5)
    // private oldPaintings: { [key: string]: EntityPacketRewriter1_21$PaintingData };
    // private paintingMappingsForEntries(arg0: RegistryEntry[]): number[];
    registerPackets(): void;
    registerRewrites(): void;
    // private storePlayerRotation(arg0: PacketWrapper): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}