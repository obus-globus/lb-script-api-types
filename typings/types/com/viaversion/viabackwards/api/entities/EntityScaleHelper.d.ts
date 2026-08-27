import type { EntityType } from '../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { EntityData } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { EntityRewriter } from '../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
import type { EntityDataHandlerEvent } from '../../../../../com/viaversion/viaversion/rewriter/entitydata/EntityDataHandlerEvent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EntityScaleHelper extends Object {
    constructor(arg0: EntityRewriter<any, Protocol<any, ClientboundPacketType, any, any>>, arg1: ClientboundPacketType)
    // private rewriter: EntityRewriter<any, any>;
    // private updateAttributesPacket: ClientboundPacketType;
    addBabyScale(arg0: EntityType, arg1: number, arg2: number): void;
    trackAndSend(arg0: EntityDataHandlerEvent, arg1: EntityData, arg2: number): void;
}