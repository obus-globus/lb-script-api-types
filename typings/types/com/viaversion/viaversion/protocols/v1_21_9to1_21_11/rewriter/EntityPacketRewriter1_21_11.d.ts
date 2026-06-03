import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { ClientboundPacket1_21_9 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ClientboundPacket1_21_9.d.ts'
import type { Protocol1_21_9To1_21_11 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_9to1_21_11/Protocol1_21_9To1_21_11.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
import type { EntityDataHandlerEvent } from '../../../../../../com/viaversion/viaversion/rewriter/entitydata/EntityDataHandlerEvent.d.ts'
export class EntityPacketRewriter1_21_11 extends EntityRewriter<ClientboundPacket1_21_9, Protocol1_21_9To1_21_11> {
    constructor(arg0: Protocol1_21_9To1_21_11)
    registerPackets(): void;
    registerRewrites(): void;
    // private relativeToAbsoluteTicks(arg0: EntityDataHandlerEvent, arg1: EntityData): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}