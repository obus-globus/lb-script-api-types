import type { Quaternion } from '../../../../../../com/viaversion/viaversion/api/minecraft/Quaternion.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_19_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ClientboundPackets1_19_4.d.ts'
import type { Protocol1_19_4To1_20 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_4to1_20/Protocol1_19_4To1_20.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_20 extends EntityRewriter<ClientboundPackets1_19_4, Protocol1_19_4To1_20> {
    constructor(arg0: Protocol1_19_4To1_20)
    registerPackets(): void;
    registerRewrites(): void;
    // private rotateY180(arg0: Quaternion): Quaternion;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}