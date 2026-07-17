import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { EntityObjectData } from '../../../../../com/viaversion/viabackwards/api/entities/storage/EntityObjectData.d.ts'
import type { EntityReplacement } from '../../../../../com/viaversion/viabackwards/api/entities/storage/EntityReplacement.d.ts'
import type { EntityRewriterBase } from '../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriterBase.d.ts'
import type { LegacyEntityRewriter$IdSetter } from '../../../../../com/viaversion/viabackwards/api/rewriters/LegacyEntityRewriter$IdSetter.d.ts'
import type { LegacyEntityRewriter$ObjectTypeGetter } from '../../../../../com/viaversion/viabackwards/api/rewriters/LegacyEntityRewriter$ObjectTypeGetter.d.ts'
import type { EntityType } from '../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ObjectType } from '../../../../../com/viaversion/viaversion/api/minecraft/entities/ObjectType.d.ts'
import type { EntityData } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { EntityDataType } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
export abstract class LegacyEntityRewriter<C extends ClientboundPacketType, T extends BackwardsProtocol<C, any, any, any>> extends EntityRewriterBase<C, T> {
    constructor(arg0: T)
    constructor(arg0: T, arg1: EntityDataType, arg2: EntityDataType)
    // private objectTypes: JavaMap<ObjectType, EntityReplacement>;
    getMobSpawnRewriter(arg0: Type<EntityData[]>): (param0: PacketWrapper) => void;
    getMobSpawnRewriter(arg0: Type<EntityData[]>, arg1: (param0: PacketWrapper, param1: number) => void): (param0: PacketWrapper) => void;
    getMobSpawnRewriter1_11(arg0: Type<EntityData[]>): (param0: PacketWrapper) => void;
    getObjectData(arg0: ObjectType): EntityReplacement;
    getObjectRewriter(arg0: (param0: number, param1: number) => ObjectType): (param0: PacketWrapper) => void;
    getObjectTrackerHandler(): (param0: PacketWrapper) => void;
    getTrackerAndDataHandler(arg0: Type<EntityData[]>, arg1: EntityType): (param0: PacketWrapper) => void;
    mapObjectType(arg0: ObjectType, arg1: ObjectType, arg2: number): EntityObjectData;
    registerJoinGame(arg0: C, arg1: EntityType): void;
    registerRespawn(arg0: C): void;
}