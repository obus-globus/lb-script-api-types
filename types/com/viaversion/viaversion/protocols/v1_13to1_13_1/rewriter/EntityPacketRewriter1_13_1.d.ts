import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_13 } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ClientboundPackets1_13.d.ts'
import type { Protocol1_13To1_13_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_13to1_13_1/Protocol1_13To1_13_1.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_13_1 extends EntityRewriter<ClientboundPackets1_13, Protocol1_13To1_13_1> {
    constructor(arg0: Protocol1_13To1_13_1)
    objectTypeFromId(arg0: number, arg1: number): EntityType;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
}