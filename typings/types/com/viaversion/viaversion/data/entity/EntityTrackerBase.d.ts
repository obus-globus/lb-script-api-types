import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientEntityIdChangeListener } from '../../../../../com/viaversion/viaversion/api/data/entity/ClientEntityIdChangeListener.d.ts'
import type { DimensionData } from '../../../../../com/viaversion/viaversion/api/data/entity/DimensionData.d.ts'
import type { EntityTracker } from '../../../../../com/viaversion/viaversion/api/data/entity/EntityTracker.d.ts'
import type { StoredEntityData } from '../../../../../com/viaversion/viaversion/api/data/entity/StoredEntityData.d.ts'
import type { TrackedEntity } from '../../../../../com/viaversion/viaversion/api/data/entity/TrackedEntity.d.ts'
import type { EntityType } from '../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { KeyMappings } from '../../../../../com/viaversion/viaversion/util/KeyMappings.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EntityTrackerBase extends Object implements ClientEntityIdChangeListener, EntityTracker {
    constructor(arg0: UserConnection, arg1: EntityType)
    // private connection: UserConnection;
    readonly dimensions: JavaMap<string, DimensionData>;
    // private entities: JavaMap<any, any>;
    readonly instaBuild: boolean;
    // private playerType: EntityType;
    // private registryKeyMappings: JavaMap<string, KeyMappings>;
    addEntity(arg0: number, arg1: EntityType): void;
    addRegistryKeys(arg0: string, arg1: KeyMappings): void;
    biomesSent(): number;
    canInstaBuild(): boolean;
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
    entityData(arg0: number): StoredEntityData;
    entityDataIfPresent(arg0: number): StoredEntityData;
    entityType(arg0: number): EntityType;
    hasClientEntityId(): boolean;
    hasEntity(arg0: number): boolean;
    playerType(): EntityType;
    registryKeys(arg0: string): KeyMappings;
    removeEntity(arg0: number): void;
    setBiomesSent(arg0: number): void;
    setClientEntityId(arg0: number): void;
    setCurrentDimensionId(arg0: number): void;
    setCurrentMinY(arg0: number): void;
    setCurrentWorld(arg0: string): void;
    setCurrentWorldSectionHeight(arg0: number): void;
    setDimensions(arg0: JavaMap<string, DimensionData>): void;
    setInstaBuild(arg0: boolean): void;
    user(): UserConnection;
}