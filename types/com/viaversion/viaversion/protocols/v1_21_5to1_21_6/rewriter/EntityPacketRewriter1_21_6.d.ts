import type { RegistryEntry } from '../../../../../../com/viaversion/viaversion/api/minecraft/RegistryEntry.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPacket1_21_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ClientboundPacket1_21_5.d.ts'
import type { Protocol1_21_5To1_21_6 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/Protocol1_21_5To1_21_6.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_21_6 extends EntityRewriter<ClientboundPacket1_21_5, Protocol1_21_5To1_21_6> {
    constructor(arg0: Protocol1_21_5To1_21_6)
    registerPackets(): void;
    registerRewrites(): void;
    // private serverLinksDialog(): RegistryEntry;
    typeFromId(arg0: number): EntityType;
}