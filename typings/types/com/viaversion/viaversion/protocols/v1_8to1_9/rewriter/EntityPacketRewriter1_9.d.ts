import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { ValueTransformer } from '../../../../../../com/viaversion/viaversion/api/protocol/remapper/ValueTransformer.d.ts'
import type { Protocol1_8To1_9 } from '../../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/Protocol1_8To1_9.d.ts'
import type { ClientboundPackets1_8 } from '../../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/packet/ClientboundPackets1_8.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
import type { EntityDataHandlerEvent } from '../../../../../../com/viaversion/viaversion/rewriter/entitydata/EntityDataHandlerEvent.d.ts'
export class EntityPacketRewriter1_9 extends EntityRewriter<ClientboundPackets1_8, Protocol1_8To1_9> {
    static toNewShort: ValueTransformer<number, number>;
    constructor(arg0: Protocol1_8To1_9)
    // private handleEntityData(arg0: EntityDataHandlerEvent, arg1: EntityData): void;
    handleEntityData(arg0: number, arg1: EntityData[], arg2: UserConnection): void;
    objectTypeFromId(arg0: number, arg1: number): EntityType;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}