import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Mappings } from '../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { EntityTracker } from '../../../../com/viaversion/viaversion/api/data/entity/EntityTracker.d.ts'
import type { EntityType } from '../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { EntityData } from '../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { EntityDataType } from '../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { EntityRewriter } from '../../../../com/viaversion/viaversion/api/rewriter/EntityRewriter.d.ts'
import type { RewriterBase } from '../../../../com/viaversion/viaversion/api/rewriter/RewriterBase.d.ts'
import type { Type } from '../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { EntityDataFilter } from '../../../../com/viaversion/viaversion/rewriter/entitydata/EntityDataFilter.d.ts'
import type { EntityDataFilter$Builder } from '../../../../com/viaversion/viaversion/rewriter/entitydata/EntityDataFilter$Builder.d.ts'
import type { EntityDataFilter$DataTypeMapper } from '../../../../com/viaversion/viaversion/rewriter/entitydata/EntityDataFilter$DataTypeMapper.d.ts'
import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export abstract class EntityRewriter<C extends ClientboundPacketType, T extends Protocol<C, Object, Object, Object>> extends RewriterBase<T> implements EntityRewriter<T> {
    constructor(arg0: T)
    constructor(arg0: T, arg1: boolean)
    // private entityDataFilters: EntityDataFilter[];
    // private trackMappedType: boolean;
    // private typeMappings: Mappings;
    biomeSizeTracker(): (param0: PacketWrapper) => void;
    cacheDimensionData(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    configurationBiomeSizeTracker(): (param0: PacketWrapper) => void;
    configurationDimensionDataHandler(): (param0: PacketWrapper) => void;
    dataTypeMapper(): EntityDataFilter$DataTypeMapper;
    dimensionDataHandler(): (param0: PacketWrapper) => void;
    filter(): EntityDataFilter$Builder;
    handleEntityData(arg0: number, arg1: EntityData[], arg2: UserConnection): void;
    // private logException(arg0: Exception, arg1: EntityType, arg2: EntityData[], arg3: EntityData): void;
    mapEntityType(arg0: EntityType, arg1: EntityType): void;
    mapEntityType(arg0: number, arg1: number): void;
    mapTypes(): void;
    mappedEntityIdentifier(arg0: string): string;
    newEntityId(arg0: number): number;
    objectTrackerHandler(): (param0: PacketWrapper) => void;
    objectTypeFromId(arg0: number, arg1: number): EntityType;
    onMappingDataLoaded(): void;
    playerTrackerHandler(): (param0: PacketWrapper) => void;
    registerBlockStateHandler(arg0: EntityType, arg1: number): void;
    registerEntityDataTypeHandler(arg0: EntityDataType, arg1: EntityDataType, arg2: EntityDataType): void;
    registerEntityDataTypeHandler(arg0: EntityDataType, arg1: EntityDataType, arg2: EntityDataType, arg3: EntityDataType, arg4: EntityDataType): void;
    registerEntityDataTypeHandler(arg0: EntityDataType, arg1: EntityDataType, arg2: EntityDataType, arg3: EntityDataType, arg4: EntityDataType, arg5: EntityDataType, arg6: EntityDataType): void;
    registerFilter(arg0: EntityDataFilter): void;
    registerGameEvent(arg0: C): void;
    registerLogin1_20_5(arg0: C): void;
    registerPlayerAbilities(arg0: C): void;
    registerRemoveEntities(arg0: C): void;
    registerRespawn1_20_5(arg0: C): void;
    registerSetEntityData(arg0: C): void;
    registerSetEntityData(arg0: C, arg1: Type<EntityData[]>): void;
    registerSetEntityData(arg0: C, arg1: Type<EntityData[]>, arg2: Type<EntityData[]>): void;
    registerTracker(arg0: C): void;
    registerTracker(arg0: C, arg1: EntityType): void;
    registerTracker(arg0: C, arg1: EntityType, arg2: Type<number>): void;
    registerTrackerWithData(arg0: C): void;
    registerTrackerWithData1_19(arg0: C): void;
    registerTrackerWithData1_21_9(arg0: C): void;
    trackAndRewrite(arg0: PacketWrapper, arg1: number, arg2: number): EntityType;
    trackBiomeSize(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    trackPlayer(arg0: UserConnection, arg1: number): void;
    trackWorld(arg0: UserConnection, arg1: string): void;
    trackWorldDataByKey1_20_5(arg0: UserConnection, arg1: number, arg2: string): void;
    tracker<E extends EntityTracker>(arg0: UserConnection): E;
    trackerAndRewriterHandler(arg0: Type<EntityData[]>): (param0: PacketWrapper) => void;
    trackerAndRewriterHandler(arg0: Type<EntityData[]>, arg1: EntityType): (param0: PacketWrapper) => void;
    trackerHandler(): (param0: PacketWrapper) => void;
    typeFromId(arg0: string): EntityType;
    typeMappings(): Mappings;
    worldDataTrackerHandler(arg0: number): (param0: PacketWrapper) => void;
    worldDataTrackerHandlerByKey(): (param0: PacketWrapper) => void;
    worldDataTrackerHandlerByKey1_20_5(arg0: number): (param0: PacketWrapper) => void;
}