import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { EntityRewriterBase } from '../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriterBase.d.ts'
import type { EntityDataType } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
export abstract class EntityRewriter<C extends ClientboundPacketType, T extends BackwardsProtocol<C, any, any, any>> extends EntityRewriterBase<C, T> {
    constructor(arg0: T)
    constructor(arg0: T, arg1: EntityDataType, arg2: EntityDataType)
    getSpawnTrackerWithDataHandler(): (param0: PacketWrapper) => void;
    trackSpawnWithData1_19(arg0: PacketWrapper, arg1: number): void;
}