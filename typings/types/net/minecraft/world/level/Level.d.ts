import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkRandomSource } from '../../../../net/caffeinemc/mods/lithium/common/world/ChunkRandomSource.d.ts'
import type { LithiumData } from '../../../../net/caffeinemc/mods/lithium/common/world/LithiumData.d.ts'
import type { LithiumData$Data } from '../../../../net/caffeinemc/mods/lithium/common/world/LithiumData$Data.d.ts'
import type { BlockEntityGetter } from '../../../../net/caffeinemc/mods/lithium/common/world/blockentity/BlockEntityGetter.d.ts'
import type { LevelAccessor } from '../../../../net/caffeinemc/mods/lithium/mixin/util/accessors/LevelAccessor.d.ts'
import type { MixinLevelInvoker } from '../../../../net/ccbluex/liquidbounce/injection/mixins/minecraft/client/MixinLevelInvoker.d.ts'
import type { AttachmentTarget } from '../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget.d.ts'
import type { AttachmentTarget$OnAttachedSet } from '../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget$OnAttachedSet.d.ts'
import type { AttachmentType } from '../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentType.d.ts'
import type { GlobalAttachments } from '../../../../net/fabricmc/fabric/api/attachment/v1/GlobalAttachments.d.ts'
import type { GlobalAttachmentsProvider } from '../../../../net/fabricmc/fabric/api/attachment/v1/GlobalAttachmentsProvider.d.ts'
import type { Event } from '../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { AttachmentTargetImpl } from '../../../../net/fabricmc/fabric/impl/attachment/AttachmentTargetImpl.d.ts'
import type { AttachmentChange } from '../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentChange.d.ts'
import type { AttachmentTargetInfo } from '../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentTargetInfo.d.ts'
import type { LoadedChunksCache } from '../../../../net/fabricmc/fabric/impl/event/lifecycle/LoadedChunksCache.d.ts'
import type { CrashReport } from '../../../../net/minecraft/CrashReport.d.ts'
import type { CrashReportCategory } from '../../../../net/minecraft/CrashReportCategory.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { ExplosionParticleInfo } from '../../../../net/minecraft/core/particles/ExplosionParticleInfo.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { WeightedList } from '../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { Difficulty } from '../../../../net/minecraft/world/Difficulty.d.ts'
import type { TickRateManager } from '../../../../net/minecraft/world/TickRateManager.d.ts'
import type { EnvironmentAttributeSystem } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeSystem.d.ts'
import type { ClockManager } from '../../../../net/minecraft/world/clock/ClockManager.d.ts'
import type { WorldClock } from '../../../../net/minecraft/world/clock/WorldClock.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { DamageSources } from '../../../../net/minecraft/world/damagesource/DamageSources.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EnderDragonPart } from '../../../../net/minecraft/world/entity/boss/enderdragon/EnderDragonPart.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { PotionBrewing } from '../../../../net/minecraft/world/item/alchemy/PotionBrewing.d.ts'
import type { FireworkExplosion } from '../../../../net/minecraft/world/item/component/FireworkExplosion.d.ts'
import type { RecipeAccess } from '../../../../net/minecraft/world/item/crafting/RecipeAccess.d.ts'
import type { BlockGetter } from '../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ExplosionDamageCalculator } from '../../../../net/minecraft/world/level/ExplosionDamageCalculator.d.ts'
import type { Level$ExplosionInteraction } from '../../../../net/minecraft/world/level/Level$ExplosionInteraction.d.ts'
import type { LevelAccessor as LevelAccessor_2 } from '../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { LevelHeightAccessor } from '../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { Biome$Precipitation } from '../../../../net/minecraft/world/level/biome/Biome$Precipitation.d.ts'
import type { BiomeManager } from '../../../../net/minecraft/world/level/biome/BiomeManager.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { FuelValues } from '../../../../net/minecraft/world/level/block/entity/FuelValues.d.ts'
import type { TickingBlockEntity } from '../../../../net/minecraft/world/level/block/entity/TickingBlockEntity.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { WorldBorder } from '../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
import type { ChunkAccess } from '../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkSource } from '../../../../net/minecraft/world/level/chunk/ChunkSource.d.ts'
import type { LevelChunk } from '../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { PalettedContainerFactory } from '../../../../net/minecraft/world/level/chunk/PalettedContainerFactory.d.ts'
import type { ChunkStatus } from '../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { DimensionType } from '../../../../net/minecraft/world/level/dimension/DimensionType.d.ts'
import type { EntityTypeTest } from '../../../../net/minecraft/world/level/entity/EntityTypeTest.d.ts'
import type { LevelEntityGetter } from '../../../../net/minecraft/world/level/entity/LevelEntityGetter.d.ts'
import type { GameEvent } from '../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { GameEvent$Context } from '../../../../net/minecraft/world/level/gameevent/GameEvent$Context.d.ts'
import type { Heightmap$Types } from '../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { LevelLightEngine } from '../../../../net/minecraft/world/level/lighting/LevelLightEngine.d.ts'
import type { FluidState } from '../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { CollectingNeighborUpdater } from '../../../../net/minecraft/world/level/redstone/CollectingNeighborUpdater.d.ts'
import type { Orientation } from '../../../../net/minecraft/world/level/redstone/Orientation.d.ts'
import type { MapId } from '../../../../net/minecraft/world/level/saveddata/maps/MapId.d.ts'
import type { MapItemSavedData } from '../../../../net/minecraft/world/level/saveddata/maps/MapItemSavedData.d.ts'
import type { LevelData } from '../../../../net/minecraft/world/level/storage/LevelData.d.ts'
import type { LevelData$RespawnData } from '../../../../net/minecraft/world/level/storage/LevelData$RespawnData.d.ts'
import type { ValueInput } from '../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { WritableLevelData } from '../../../../net/minecraft/world/level/storage/WritableLevelData.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { Scoreboard } from '../../../../net/minecraft/world/scores/Scoreboard.d.ts'
import type { ScheduledTick } from '../../../../net/minecraft/world/ticks/ScheduledTick.d.ts'
import type { TickPriority } from '../../../../net/minecraft/world/ticks/TickPriority.d.ts'
export abstract class Level extends Object implements AutoCloseable, ChunkRandomSource, LithiumData, BlockEntityGetter, LevelAccessor, MixinLevelInvoker, AttachmentTarget, GlobalAttachmentsProvider, AttachmentTargetImpl, LoadedChunksCache, LevelAccessor_2, LevelHeightAccessor {
    static DIRECTIONS: (Object | null)[];
    static END: ResourceKey<Level>;
    static LONG_PARTICLE_CLIP_RANGE: number;
    static MAX_BRIGHTNESS: number;
    static MAX_ENTITY_SPAWN_Y: number;
    static MAX_LEVEL_SIZE: number;
    static MIN_ENTITY_SPAWN_Y: number;
    static NBT_ATTACHMENT_KEY: string;
    static NETHER: ResourceKey<Level>;
    static OVERWORLD: ResourceKey<Level>;
    static RESOURCE_KEY_CODEC: Codec<ResourceKey<Level>>;
    static SHORT_PARTICLE_CLIP_RANGE: number;
    static create(paramminY: number, paramheight: number): LevelHeightAccessor;
    static isInSpawnableBounds(parampos: BlockPos): boolean;
    static transfer(paramarg0: AttachmentTarget, paramarg1: AttachmentTarget, paramarg2: boolean): void;
    constructor(levelData: WritableLevelData, dimension: ResourceKey<Level>, registryAccess: RegistryAccess, dimensionTypeRegistration: Holder<DimensionType>, isClientSide: boolean, isDebug: boolean, biomeZoomSeed: number, maxChainedNeighborUpdates: number)
    // private addend: number;
    // private attachedChangedListeners: Map<Object, Object>;
    readonly biomeManager: BiomeManager;
    // private blockEntityTickers: TickingBlockEntity[];
    // private bottomY: number;
    // private damageSources: DamageSources;
    // private dataAttachments: Map<Object, Object>;
    // private deferredSyncedAttachments: (Object | null)[];
    // private dimension: ResourceKey<Level>;
    // private dimensionTypeRegistration: Holder<DimensionType>;
    readonly height: number;
    // private isClientSide: boolean;
    // private isDebug: boolean;
    readonly levelData: WritableLevelData;
    // private loadedChunks: (Object | null)[];
    // private neighborUpdater: CollectingNeighborUpdater;
    // private oRainLevel: number;
    // private oThunderLevel: number;
    // private palettedContainerFactory: PalettedContainerFactory;
    // private pendingBlockEntityTickers: TickingBlockEntity[];
    rainLevel: number;
    // private randValue: number;
    readonly random: RandomSource;
    // private registryAccess: RegistryAccess;
    readonly skyDarken: number;
    // private soundSeedGenerator: RandomSource;
    // private storage: LithiumData$Data;
    // private subTickCount: number;
    // private syncedAttachments: Map<Object, Object>;
    readonly thread: Thread;
    thunderLevel: number;
    // private tickingBlockEntities: boolean;
    // private topYInclusive: number;
    // private acknowledgeSynced(arg0: AttachmentType<Object>, arg1: Object): void;
    // private acknowledgeSyncedEntry(arg0: AttachmentType<Object>, arg1: AttachmentChange): void;
    addAlwaysVisibleParticle(particle: ParticleOptions, overrideLimiter: boolean, x: number, y: number, z: number, xd: number, yd: number, zd: number): void;
    addAlwaysVisibleParticle(particle: ParticleOptions, x: number, y: number, z: number, xd: number, yd: number, zd: number): void;
    addBlockEntityTicker(ticker: TickingBlockEntity): void;
    addDestroyBlockEffect(pos: BlockPos, blockState: BlockState): void;
    addParticle(particle: ParticleOptions, overrideLimiter: boolean, alwaysShow: boolean, x: number, y: number, z: number, xd: number, yd: number, zd: number): void;
    addParticle(particle: ParticleOptions, x: number, y: number, z: number, xd: number, yd: number, zd: number): void;
    blockEntityChanged(pos: BlockPos): void;
    blockEvent(pos: BlockPos, block: Block, b0: number, b1: number): void;
    broadcastDamageEvent(entity: Entity, source: DamageSource): void;
    broadcastEntityEvent(entity: Entity, event: number): void;
    canHaveWeather(): boolean;
    clockManager(): ClockManager;
    close(): void;
    createFireworks(x: number, y: number, z: number, xd: number, yd: number, zd: number, explosions: FireworkExplosion[]): void;
    createTick<T extends Object | number | string | boolean>(pos: BlockPos, type: T, tickDelay: number): ScheduledTick<T>;
    createTick<T extends Object | number | string | boolean>(pos: BlockPos, type: T, tickDelay: number, priority: TickPriority): ScheduledTick<T>;
    damageSources(): DamageSources;
    destroyBlock(pos: BlockPos, dropResources: boolean): boolean;
    destroyBlock(pos: BlockPos, dropResources: boolean, breaker: Entity): boolean;
    destroyBlock(pos: BlockPos, dropResources: boolean, breaker: Entity, updateLimit: number): boolean;
    destroyBlockProgress(id: number, blockPos: BlockPos, progress: number): void;
    dimension(): ResourceKey<Level>;
    dimensionType(): DimensionType;
    dimensionTypeRegistration(): Holder<DimensionType>;
    dragonParts(): EnderDragonPart[];
    enabledFeatures(): FeatureFlagSet;
    environmentAttributes(): EnvironmentAttributeSystem;
    explode(source: Entity, x: number, y: number, z: number, r: number, fire: boolean, blockInteraction: Level$ExplosionInteraction): void;
    explode(source: Entity, x: number, y: number, z: number, r: number, blockInteraction: Level$ExplosionInteraction): void;
    explode(source: Entity, damageSource: DamageSource, damageCalculator: ExplosionDamageCalculator, x: number, y: number, z: number, r: number, fire: boolean, interactionType: Level$ExplosionInteraction): void;
    explode(source: Entity, damageSource: DamageSource, damageCalculator: ExplosionDamageCalculator, x: number, y: number, z: number, r: number, fire: boolean, interactionType: Level$ExplosionInteraction, smallExplosionParticles: ParticleOptions, largeExplosionParticles: ParticleOptions, blockParticles: WeightedList<ExplosionParticleInfo>, explosionSound: Holder<SoundEvent>): void;
    explode(source: Entity, damageSource: DamageSource, damageCalculator: ExplosionDamageCalculator, boomPos: Vec3, r: number, fire: boolean, blockInteraction: Level$ExplosionInteraction): void;
    fabric_clearDeferredSyncChanges(): void;
    fabric_computeInitialSyncChanges(arg0: ServerPlayer, arg1: (param0: AttachmentChange) => void): void;
    fabric_computeInitialSyncChanges(arg0: ServerPlayer, arg1: (param0: Object) => void): void;
    fabric_getAttachments(): Map<AttachmentType<Object>, Object | null>;
    fabric_getAttachments(): Map<Object | null, Object | null>;
    fabric_getLoadedChunks(): (Object | null)[];
    fabric_getRegistryAccess(): RegistryAccess;
    fabric_getSyncTargetInfo(): AttachmentTargetInfo<Object>;
    fabric_hasPersistentAttachments(): boolean;
    fabric_markChanged(arg0: AttachmentType<Object>): void;
    fabric_markLoaded(arg0: LevelChunk): void;
    fabric_markUnloaded(arg0: LevelChunk): void;
    fabric_readAttachmentsFromNbt(arg0: ValueInput): void;
    fabric_sendAndClearDeferredSyncChanges(arg0: ServerPlayer[]): void;
    fabric_sendAndClearDeferredSyncChanges(arg0: (Object | null)[]): void;
    fabric_shouldDeferSync(): boolean;
    fabric_shouldTryToSync(): boolean;
    fabric_syncChange(arg0: AttachmentType<Object>, arg1: AttachmentChange): void;
    fabric_updateSyncTarget<T extends Object | number | string | boolean>(arg0: AttachmentTargetInfo<T>, arg1: AttachmentTargetInfo<T>): void;
    fabric_updateSyncTarget(arg0: AttachmentTargetInfo<Object>, arg1: AttachmentTargetInfo<Object>): void;
    fabric_writeAttachmentsToNbt(arg0: ValueOutput): void;
    fillReportDetails(report: CrashReport): CrashReportCategory;
    findFreePosition(arg0: Entity, arg1: VoxelShape, arg2: Vec3, arg3: number, arg4: number, arg5: number): Optional<Object>;
    findSupportingBlock(arg0: Entity, arg1: AABB): Optional<Object>;
    fuelValues(): FuelValues;
    gameEvent(gameEvent: Holder<GameEvent>, pos: BlockPos, context: GameEvent$Context): void;
    gameEvent(gameEvent: ResourceKey<GameEvent>, pos: BlockPos, context: GameEvent$Context): void;
    gameEvent(sourceEntity: Entity, gameEvent: Holder<GameEvent>, pos: BlockPos): void;
    gameEvent(sourceEntity: Entity, gameEvent: Holder<GameEvent>, pos: Vec3): void;
    gatherChunkSourceStats(): string;
    getAttached<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): A;
    getAttached(arg0: AttachmentType<Object>): Object;
    getAttachedOrCreate<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): A;
    getAttachedOrCreate<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: () => A): A;
    getAttachedOrElse<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: A): A;
    getAttachedOrGet<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: () => A): A;
    getAttachedOrSet<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: A): A;
    getAttachedOrThrow<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): A;
    getBiomeManager(): BiomeManager;
    getBlockEntity(pos: BlockPos): BlockEntity;
    getBlockEntity<T extends BlockEntity>(pos: BlockPos, type: BlockEntityType<T>): Optional<T>;
    getBlockRandomPos(xo: number, yo: number, zo: number, yMask: number): BlockPos;
    getBlockState(arg0: BlockPos): BlockState;
    getChunk(arg0: number, arg1: number): LevelChunk;
    getChunk(arg0: number, arg1: number, arg2: ChunkStatus): ChunkAccess;
    getChunk(chunkX: number, chunkZ: number, status: ChunkStatus, loadOrGenerate: boolean): ChunkAccess;
    getChunk(arg0: BlockPos): ChunkAccess;
    getChunkAt(arg0: BlockPos): LevelChunk;
    getChunkForCollisions(arg0: number, arg1: number): BlockGetter;
    getChunkSource(): ChunkSource;
    getClientLeafTintColor(pos: BlockPos): number;
    // private getClockTimeTicks(clock: Optional<Holder<WorldClock>>): number;
    getDefaultClockTime(): number;
    getDifficulty(): Difficulty;
    getEntities(): LevelEntityGetter<Entity>;
    getEntities(except: Entity, bb: AABB): Entity[];
    getEntities(except: Entity, bb: AABB, selector: (param0: Entity) => boolean): Entity[];
    getEntities<T extends Entity>(type: EntityTypeTest<Entity, T>, bb: AABB, selector: (param0: T) => boolean): T[];
    getEntities<T extends Entity>(type: EntityTypeTest<Entity, T>, bb: AABB, selector: (param0: T) => boolean, output: T[]): void;
    getEntities<T extends Entity>(type: EntityTypeTest<Entity, T>, bb: AABB, selector: (param0: T) => boolean, output: T[], maxResults: number): void;
    getEntity(uuid: UUID): Entity;
    getEntity(id: number): Entity;
    getEntityInAnyDimension(uuid: UUID): Entity;
    getFluidState(pos: BlockPos): FluidState;
    getGameTime(): number;
    getHeight(): number;
    getHeight(type: Heightmap$Types, x: number, z: number): number;
    getHeight(type: Heightmap$Types, pos: BlockPos): number;
    getLevelData(): LevelData;
    getLightEngine(): LevelLightEngine;
    getMapData(id: MapId): MapItemSavedData;
    getMaxSectionY(): number;
    getMaxY(): number;
    getMinSectionY(): number;
    getMinY(): number;
    getOverworldClockTime(): number;
    getPlayerInAnyDimension(uuid: UUID): Player;
    getPushableEntities(pusher: Entity, boundingBox: AABB): Entity[];
    getRainLevel(a: number): number;
    getRandom(): RandomSource;
    getRespawnData(): LevelData$RespawnData;
    getScoreboard(): Scoreboard;
    getSeaLevel(): number;
    getSectionIndex(arg0: number): number;
    getSectionIndex(blockY: number): number;
    getSectionIndexFromSectionY(arg0: number): number;
    getSectionIndexFromSectionY(sectionY: number): number;
    getSectionYFromSectionIndex(arg0: number): number;
    getSectionYFromSectionIndex(sectionIndex: number): number;
    getSectionsCount(): number;
    getServer(): MinecraftServer;
    getSkyDarken(): number;
    getThread(): Thread;
    getThunderLevel(a: number): number;
    getWorldBorder(): WorldBorder;
    getWorldBorderAdjustedRespawnData(respawnData: LevelData$RespawnData): LevelData$RespawnData;
    globalAttachments(): GlobalAttachments;
    globalLevelEvent(type: number, pos: BlockPos, data: number): void;
    guardEntityTick<T extends Entity>(tick: (param0: T) => void, entity: T): void;
    hasAttached(arg0: AttachmentType<Object>): boolean;
    hasChunk(chunkX: number, chunkZ: number): boolean;
    hasEntities<T extends Entity>(type: EntityTypeTest<Entity, T>, bb: AABB, selector: (param0: T) => boolean): boolean;
    isBrightOutside(): boolean;
    isClientSide(): boolean;
    isDarkOutside(): boolean;
    isDebug(): boolean;
    isFluidAtPosition(pos: BlockPos, predicate: (param0: FluidState) => boolean): boolean;
    isInValidBounds(pos: BlockPos): boolean;
    isInWorldBounds(pos: BlockPos): boolean;
    isInsideBuildHeight(blockY: number): boolean;
    isInsideBuildHeight(pos: BlockPos): boolean;
    isLoaded(pos: BlockPos): boolean;
    isOutsideBuildHeight(arg0: number): boolean;
    isOutsideBuildHeight(arg0: BlockPos): boolean;
    isOutsideBuildHeight(blockY: number): boolean;
    isOutsideBuildHeight(pos: BlockPos): boolean;
    isRaining(): boolean;
    isRainingAt(pos: BlockPos): boolean;
    isStateAtPosition(pos: BlockPos, predicate: (param0: BlockState) => boolean): boolean;
    isThundering(): boolean;
    levelEvent(type: number, pos: BlockPos, data: number): void;
    levelEvent(source: Entity, type: number, pos: BlockPos, data: number): void;
    lithium$getData(): LithiumData$Data;
    lithium$getLoadedExistingBlockEntity(arg0: BlockPos): BlockEntity;
    lithium$getRandomPosInChunk(arg0: number, arg1: number, arg2: number, arg3: number, arg4: BlockPos$MutableBlockPos): void;
    loadedAndEntityCanStandOn(pos: BlockPos, entity: Entity): boolean;
    loadedAndEntityCanStandOnFace(pos: BlockPos, entity: Entity, faceDirection: Direction): boolean;
    mayInteract(entity: Entity, pos: BlockPos): boolean;
    modifyAttached<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: (param0: A) => Object | null): A;
    neighborChanged(pos: BlockPos, changedBlock: Block, orientation: Orientation): void;
    neighborChanged(state: BlockState, pos: BlockPos, changedBlock: Block, orientation: Orientation, movedByPiston: boolean): void;
    neighborShapeChanged(direction: Direction, pos: BlockPos, neighborPos: BlockPos, neighborState: BlockState, updateFlags: number, updateLimit: number): void;
    nextSubTickCount(): number;
    noCollision(source: Entity): boolean;
    noCollision(arg0: Entity, arg1: AABB): boolean;
    noCollision(entity: Entity, aabb: AABB, alwaysCollideWithFluids: boolean): boolean;
    noCollision(aabb: AABB): boolean;
    noSave(): boolean;
    onAttachedSet<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): Event<(param0: A, param1: A) => void>;
    onAttachedSet(arg0: AttachmentType<Object>): Event<Object>;
    onBlockEntityAdded(blockEntity: BlockEntity): void;
    palettedContainerFactory(): PalettedContainerFactory;
    playLocalSound(x: number, y: number, z: number, sound: SoundEvent, source: SoundSource, volume: number, pitch: number, distanceDelay: boolean): void;
    playLocalSound(pos: BlockPos, sound: SoundEvent, source: SoundSource, volume: number, pitch: number, distanceDelay: boolean): void;
    playLocalSound(sourceEntity: Entity, sound: SoundEvent, source: SoundSource, volume: number, pitch: number): void;
    playPlayerSound(sound: SoundEvent, source: SoundSource, volume: number, pitch: number): void;
    playSeededSound(except: Entity, x: number, y: number, z: number, sound: Holder<SoundEvent>, source: SoundSource, volume: number, pitch: number, seed: number): void;
    playSeededSound(except: Entity, x: number, y: number, z: number, sound: SoundEvent, source: SoundSource, volume: number, pitch: number, seed: number): void;
    playSeededSound(except: Entity, sourceEntity: Entity, sound: Holder<SoundEvent>, source: SoundSource, volume: number, pitch: number, seed: number): void;
    playSound(except: Entity, x: number, y: number, z: number, sound: Holder<SoundEvent>, source: SoundSource, volume: number, pitch: number): void;
    playSound(except: Entity, x: number, y: number, z: number, sound: SoundEvent, source: SoundSource): void;
    playSound(except: Entity, x: number, y: number, z: number, sound: SoundEvent, source: SoundSource, volume: number, pitch: number): void;
    playSound(except: Entity, pos: BlockPos, soundEvent: SoundEvent, source: SoundSource): void;
    playSound(except: Entity, pos: BlockPos, sound: SoundEvent, source: SoundSource, volume: number, pitch: number): void;
    playSound(except: Entity, sourceEntity: Entity, sound: SoundEvent, source: SoundSource, volume: number, pitch: number): void;
    potionBrewing(): PotionBrewing;
    precipitationAt(pos: BlockPos): Biome$Precipitation;
    recipeAccess(): RecipeAccess;
    registryAccess(): RegistryAccess;
    removeAttached<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): A;
    removeBlock(pos: BlockPos, movedByPiston: boolean): boolean;
    removeBlockEntity(pos: BlockPos): void;
    sendBlockUpdated(pos: BlockPos, old: BlockState, current: BlockState, updateFlags: number): void;
    sendPacketToServer(packet: Packet<any>): void;
    setAttached<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: A): A;
    setAttached(arg0: AttachmentType<Object>, arg1: Object): Object;
    setBlock(pos: BlockPos, blockState: BlockState, updateFlags: number): boolean;
    setBlock(pos: BlockPos, blockState: BlockState, updateFlags: number, updateLimit: number): boolean;
    setBlockAndUpdate(pos: BlockPos, blockState: BlockState): boolean;
    setBlockEntity(blockEntity: BlockEntity): void;
    setBlocksDirty(pos: BlockPos, oldState: BlockState, newState: BlockState): void;
    setRainLevel(rainLevel: number): void;
    setRespawnData(respawnData: LevelData$RespawnData): void;
    setSkyFlashTime(skyFlashTime: number): void;
    setSpawnSettings(spawnEnemies: boolean): void;
    setThunderLevel(thunderLevel: number): void;
    shouldTickBlocksAt(chunkPos: number): boolean;
    shouldTickBlocksAt(pos: BlockPos): boolean;
    shouldTickDeath(entity: Entity): boolean;
    tickBlockEntities(): void;
    tickRateManager(): TickRateManager;
    updateNeighborsAt(pos: BlockPos, sourceBlock: Block): void;
    updateNeighborsAt(pos: BlockPos, sourceBlock: Block, orientation: Orientation): void;
    updateNeighborsAtExceptFromFacing(pos: BlockPos, blockObject: Block, skipDirection: Direction, orientation: Orientation): void;
    updateNeighbourForOutputSignal(pos: BlockPos, changedBlock: Block): void;
    updatePOIOnBlockStateChange(pos: BlockPos, oldState: BlockState, newState: BlockState): void;
    updateSkyBrightness(): void;
}