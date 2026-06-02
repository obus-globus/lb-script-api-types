import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_20To1_19_4 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_20to1_19_4/Protocol1_20To1_19_4.d.ts'
import type { Quaternion } from '../../../../../../com/viaversion/viaversion/api/minecraft/Quaternion.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_19_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ClientboundPackets1_19_4.d.ts'
export class EntityPacketRewriter1_20 extends EntityRewriter<ClientboundPackets1_19_4, Protocol1_20To1_19_4> {
    constructor(arg0: Protocol1_20To1_19_4)
    // private newTrimPatterns: string[];
    registerPackets(): void;
    registerRewrites(): void;
    // private rotateY180(arg0: Quaternion): Quaternion;
    typeFromId(arg0: number): EntityType;
}