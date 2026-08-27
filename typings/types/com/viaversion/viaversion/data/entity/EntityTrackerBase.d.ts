import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientEntityIdChangeListener } from '../../../../../com/viaversion/viaversion/api/data/entity/ClientEntityIdChangeListener.d.ts'
import type { DimensionData } from '../../../../../com/viaversion/viaversion/api/data/entity/DimensionData.d.ts'
import type { EntityTracker } from '../../../../../com/viaversion/viaversion/api/data/entity/EntityTracker.d.ts'
import type { TrackedEntity } from '../../../../../com/viaversion/viaversion/api/data/entity/TrackedEntity.d.ts'
import type { Chunk } from '../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { EntityType } from '../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { KeyMappings } from '../../../../../com/viaversion/viaversion/util/KeyMappings.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EntityTrackerBase extends Object implements ClientEntityIdChangeListener, EntityTracker {
    constructor(arg0: UserConnection, arg1: EntityType)
    // private chunkType: Type<Chunk>;
    // private connection: UserConnection;
    readonly dimensions: JavaMap<string, DimensionData>;
    // private entities: JavaMap<any, any>;
    readonly instaBuild: boolean;
    // private mappedChunkType: Type<Chunk>;
    // private playerType: EntityType;
    // private registryKeyMappings: JavaMap<string, KeyMappings>;
    addEntity(arg0: number, arg1: EntityType): TrackedEntity;
    addRegistryKeys(arg0: string, arg1: KeyMappings): void;
    biomesSent(): number;
    canInstaBuild(): boolean;
    chunkType(arg0: boolean): Type<Chunk>;
    clear(): void;
    clearEntities(): void;
    clientEntityId(): number;
    currentDimensionId(): number;
    currentMinY(): number;
    currentWorld(): string;
    currentWorldSectionHeight(): number;
    dimensionData(arg0: number): DimensionData;
    dimensionData(arg0: string): DimensionData;
    entity(arg0: number): TrackedEntity;
    entityType(arg0: number): EntityType;
    hasClientEntityId(): boolean;
    hasEntity(arg0: number): boolean;
    playerType(): EntityType;
    registryKeys(arg0: string): KeyMappings;
    removeEntity(arg0: number): TrackedEntity;
    setBiomesSent(arg0: number): void;
    setChunkType(arg0: boolean, arg1: Type<Chunk>): void;
    setClientEntityId(arg0: number): void;
    setCurrentDimensionId(arg0: number): void;
    setCurrentMinY(arg0: number): void;
    setCurrentWorld(arg0: string): void;
    setCurrentWorldSectionHeight(arg0: number): void;
    setDimensions(arg0: JavaMap<string, DimensionData>): void;
    setInstaBuild(arg0: boolean): void;
    user(): UserConnection;
}