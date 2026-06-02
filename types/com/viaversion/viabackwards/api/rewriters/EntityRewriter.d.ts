import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { EntityRewriterBase } from '../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriterBase.d.ts'
import type { EntityType } from '../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { EntityDataType } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class EntityRewriter<C extends ClientboundPacketType, T extends BackwardsProtocol<C, Object, Object, Object>> extends EntityRewriterBase<C, T> {
    constructor(arg0: T)
    constructor(arg0: T, arg1: EntityDataType, arg2: EntityDataType)
    getSpawnTrackerWithDataHandler(): (param0: PacketWrapper) => void;
    getSpawnTrackerWithDataHandler1_19(): (param0: PacketWrapper) => void;
    registerTracker(arg0: C): void;
    registerTrackerWithData(arg0: C): void;
    registerTrackerWithData1_19(arg0: C): void;
    trackAndMapEntity(arg0: PacketWrapper): EntityType;
    worldTrackerHandlerByKey(): (param0: PacketWrapper) => void;
}