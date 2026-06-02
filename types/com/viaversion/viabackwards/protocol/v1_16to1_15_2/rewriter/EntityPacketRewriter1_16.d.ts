import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_16To1_15_2 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_16to1_15_2/Protocol1_16To1_15_2.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ValueTransformer } from '../../../../../../com/viaversion/viaversion/api/protocol/remapper/ValueTransformer.d.ts'
import type { ClientboundPackets1_16 } from '../../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/packet/ClientboundPackets1_16.d.ts'
export class EntityPacketRewriter1_16 extends EntityRewriter<ClientboundPackets1_16, Protocol1_16To1_15_2> {
    constructor(arg0: Protocol1_16To1_15_2)
    // private dimensionTransformer: ValueTransformer<string, number>;
    onMappingDataLoaded(): void;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
}