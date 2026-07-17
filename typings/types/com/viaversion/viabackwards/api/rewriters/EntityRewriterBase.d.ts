import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { EntityReplacement } from '../../../../../com/viaversion/viabackwards/api/entities/storage/EntityReplacement.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StoredEntityData } from '../../../../../com/viaversion/viaversion/api/data/entity/StoredEntityData.d.ts'
import type { EntityType } from '../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { EntityData } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { EntityDataType } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { EntityRewriter } from '../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
import type { EntityDataHandlerEvent } from '../../../../../com/viaversion/viaversion/rewriter/entitydata/EntityDataHandlerEvent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export abstract class EntityRewriterBase<C extends ClientboundPacketType, T extends BackwardsProtocol<C, any, any, any>> extends EntityRewriter<C, T> {
    constructor(arg0: T, arg1: EntityDataType, arg2: number, arg3: EntityDataType, arg4: number)
    // private displayNameDataType: EntityDataType;
    // private displayNameIndex: number;
    // private displayVisibilityDataType: EntityDataType;
    // private displayVisibilityIndex: number;
    // private entityDataMappings: JavaMap<any, any>;
    // private addDisplayVisibilityData(arg0: EntityData[]): void;
    alwaysShowOriginalMobName(): boolean;
    entityDataForType(arg0: EntityType): EntityReplacement;
    getData(arg0: number, arg1: EntityData[]): EntityData;
    getDimensionHandler(arg0: number): (param0: PacketWrapper) => void;
    getDisplayVisibilityDataValue(): Object;
    getPlayerTrackerHandler(): (param0: PacketWrapper) => void;
    getTrackerHandler(): (param0: PacketWrapper) => void;
    getTrackerHandler(arg0: EntityType): (param0: PacketWrapper) => void;
    getTrackerHandler(arg0: Type<Number>, arg1: number): (param0: PacketWrapper) => void;
    handleEntityData(arg0: number, arg1: EntityData[], arg2: UserConnection): void;
    hasData(arg0: EntityType): boolean;
    mapEntityTypeWithData(arg0: EntityType, arg1: EntityType): EntityReplacement;
    registerEntityDataTypeHandler(arg0: EntityDataType, arg1: EntityDataType, arg2: EntityDataType): void;
    registerEntityDataTypeHandler(arg0: EntityDataType, arg1: EntityDataType, arg2: EntityDataType, arg3: EntityDataType, arg4: EntityDataType): void;
    registerEntityDataTypeHandler(arg0: EntityDataType, arg1: EntityDataType, arg2: EntityDataType, arg3: EntityDataType, arg4: EntityDataType, arg5: EntityDataType): void;
    registerEntityDataTypeHandler(arg0: EntityDataType, arg1: EntityDataType, arg2: EntityDataType, arg3: EntityDataType, arg4: EntityDataType, arg5: EntityDataType, arg6: EntityDataType): void;
    registerEntityDataTypeHandler1_20_3(arg0: EntityDataType, arg1: EntityDataType, arg2: EntityDataType, arg3: EntityDataType, arg4: EntityDataType, arg5: EntityDataType, arg6: EntityDataType): void;
    removeData(arg0: number, arg1: EntityData[]): void;
    storedEntityData(arg0: EntityDataHandlerEvent): StoredEntityData;
}