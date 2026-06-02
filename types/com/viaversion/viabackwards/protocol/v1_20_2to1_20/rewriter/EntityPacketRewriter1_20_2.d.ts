import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_20_2To1_20 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_20_2to1_20/Protocol1_20_2To1_20.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_20_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/packet/ClientboundPackets1_20_2.d.ts'
export class EntityPacketRewriter1_20_2 extends EntityRewriter<ClientboundPackets1_20_2, Protocol1_20_2To1_20> {
    constructor(arg0: Protocol1_20_2To1_20)
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
}