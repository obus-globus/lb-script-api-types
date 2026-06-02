import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PersistentEntitySectionManagerAccessor } from '../../../../../net/caffeinemc/mods/lithium/mixin/minimal_nonvanilla/spawning/PersistentEntitySectionManagerAccessor.d.ts'
import type { PersistentEntitySectionManagerAccessor } from '../../../../../net/caffeinemc/mods/lithium/mixin/util/accessors/PersistentEntitySectionManagerAccessor.d.ts'
import type { PersistentEntitySectionManagerAccessor } from '../../../../../net/caffeinemc/mods/lithium/mixin/util/entity_movement_tracking/PersistentEntitySectionManagerAccessor.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { FullChunkStatus } from '../../../../../net/minecraft/server/level/FullChunkStatus.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { ChunkEntities } from '../../../../../net/minecraft/world/level/entity/ChunkEntities.d.ts'
import type { EntityAccess } from '../../../../../net/minecraft/world/level/entity/EntityAccess.d.ts'
import type { EntityLookup } from '../../../../../net/minecraft/world/level/entity/EntityLookup.d.ts'
import type { EntityPersistentStorage } from '../../../../../net/minecraft/world/level/entity/EntityPersistentStorage.d.ts'
import type { EntitySection } from '../../../../../net/minecraft/world/level/entity/EntitySection.d.ts'
import type { EntitySectionStorage } from '../../../../../net/minecraft/world/level/entity/EntitySectionStorage.d.ts'
import type { LevelCallback } from '../../../../../net/minecraft/world/level/entity/LevelCallback.d.ts'
import type { LevelEntityGetter } from '../../../../../net/minecraft/world/level/entity/LevelEntityGetter.d.ts'
import type { PersistentEntitySectionManager$ChunkLoadStatus } from '../../../../../net/minecraft/world/level/entity/PersistentEntitySectionManager$ChunkLoadStatus.d.ts'
import type { Visibility } from '../../../../../net/minecraft/world/level/entity/Visibility.d.ts'
export class PersistentEntitySectionManager<T extends EntityAccess> extends Object implements AutoCloseable, PersistentEntitySectionManagerAccessor<EntityAccess>, PersistentEntitySectionManagerAccessor<EntityAccess>, PersistentEntitySectionManagerAccessor<EntityAccess> {
    constructor(entityClass: Class<T>, callbacks: LevelCallback<T>, permanentStorage: EntityPersistentStorage<T>)
    // private callbacks: LevelCallback<T>;
    // private chunkLoadStatuses: Long2ObjectMap<PersistentEntitySectionManager$ChunkLoadStatus>;
    // private chunkVisibility: Long2ObjectMap<Visibility>;
    // private chunksToUnload: (Object | null)[];
    readonly entityGetter: LevelEntityGetter<T>;
    // private knownUuids: UUID[];
    // private loadingInbox: ChunkEntities<T>[];
    // private permanentStorage: EntityPersistentStorage<T>;
    // private sectionStorage: EntitySectionStorage<T>;
    // private visibleEntityStorage: EntityLookup<T>;
    // private addEntity(entity: T, loaded: boolean): boolean;
    // private addEntityUuid(entity: T): boolean;
    addLegacyChunkEntities(entities: Stream<T>): void;
    addNewEntity(entity: T): boolean;
    addWorldGenChunkEntities(entities: Stream<T>): void;
    areEntitiesLoaded(chunkKey: number): boolean;
    autoSave(): void;
    canPositionTick(pos: BlockPos): boolean;
    canPositionTick(pos: ChunkPos): boolean;
    close(): void;
    count(): number;
    dumpSections(output: Writer): void;
    // private ensureChunkQueuedForLoad(chunkPos: number): void;
    gatherStats(): string;
    // private getAllChunksToSave(): (Object | null)[];
    getEntityGetter(): LevelEntityGetter<T>;
    isLoaded(uuid: UUID): boolean;
    isTicking(pos: ChunkPos): boolean;
    // private processChunkUnload(chunkKey: number): boolean;
    processPendingLoads(): void;
    // private processUnloads(): void;
    // private removeSectionIfEmpty(sectionPos: number, section: EntitySection<T>): void;
    // private requestChunkLoad(chunkKey: number): void;
    saveAll(): void;
    // private startTicking(entity: T): void;
    // private startTracking(entity: T): void;
    // private stopTicking(entity: T): void;
    // private stopTracking(entity: T): void;
    // private storeChunkSections(chunkPos: number, savedEntityVisitor: (param0: T) => void): boolean;
    tick(): void;
    // private unloadEntity(e: EntityAccess): void;
    updateChunkStatus(pos: ChunkPos, fullChunkStatus: FullChunkStatus): void;
    updateChunkStatus(pos: ChunkPos, chunkStatus: Visibility): void;
}