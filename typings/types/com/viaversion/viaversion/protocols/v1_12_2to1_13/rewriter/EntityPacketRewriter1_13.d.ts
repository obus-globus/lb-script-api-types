import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { Protocol1_12_2To1_13 } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/Protocol1_12_2To1_13.d.ts'
import type { ClientboundPackets1_12_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_12to1_12_1/packet/ClientboundPackets1_12_1.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_13 extends EntityRewriter<ClientboundPackets1_12_1, Protocol1_12_2To1_13> {
    constructor(arg0: Protocol1_12_2To1_13)
    newEntityId(arg0: number): number;
    objectTypeFromId(arg0: number, arg1: number): EntityType;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}