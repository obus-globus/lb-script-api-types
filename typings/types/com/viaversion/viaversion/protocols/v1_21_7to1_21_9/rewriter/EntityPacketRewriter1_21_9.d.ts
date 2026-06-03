import type { Vector3d } from '../../../../../../com/viaversion/viaversion/api/minecraft/Vector3d.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ClientboundPacket1_21_6 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ClientboundPacket1_21_6.d.ts'
import type { Protocol1_21_7To1_21_9 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/Protocol1_21_7To1_21_9.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_21_9 extends EntityRewriter<ClientboundPacket1_21_6, Protocol1_21_7To1_21_9> {
    constructor(arg0: Protocol1_21_7To1_21_9)
    // private readRelativeMovement(arg0: PacketWrapper): Vector3d;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}