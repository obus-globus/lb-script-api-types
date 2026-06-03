import type { EntityRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol99_1To98_1 } from '../../../../../com/viaversion/viabackwards/protocol/template/Protocol99_1To98_1.d.ts'
import type { EntityType } from '../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPacket26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ClientboundPacket26_1.d.ts'
export class EntityPacketRewriter99_1 extends EntityRewriter<ClientboundPacket26_1, Protocol99_1To98_1> {
    constructor(arg0: Protocol99_1To98_1)
    onMappingDataLoaded(): void;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}