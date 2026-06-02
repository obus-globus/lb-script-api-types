import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerWorldExtended } from '../../../../net/caffeinemc/mods/lithium/common/world/ServerWorldExtended.d.ts'
import type { ServerLevelAccessor } from '../../../../net/caffeinemc/mods/lithium/mixin/minimal_nonvanilla/spawning/ServerLevelAccessor.d.ts'
import type { ServerLevelAccessor } from '../../../../net/caffeinemc/mods/lithium/mixin/util/accessors/ServerLevelAccessor.d.ts'
import type { ServerLevelAccessor } from '../../../../net/caffeinemc/mods/lithium/mixin/util/entity_movement_tracking/ServerLevelAccessor.d.ts'
import type { AttachmentTarget } from '../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget.d.ts'
import type { AttachmentType } from '../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentType.d.ts'
import type { GlobalAttachments } from '../../../../net/fabricmc/fabric/api/attachment/v1/GlobalAttachments.d.ts'
import type { AttachmentTargetImpl } from '../../../../net/fabricmc/fabric/impl/attachment/AttachmentTargetImpl.d.ts'
import type { AttachmentChange } from '../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentChange.d.ts'
import type { AttachmentTargetInfo } from '../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentTargetInfo.d.ts'
import type { BlockApiCacheImpl } from '../../../../net/fabricmc/fabric/impl/lookup/block/BlockApiCacheImpl.d.ts'
import type { ServerLevelCache } from '../../../../net/fabricmc/fabric/impl/lookup/block/ServerLevelCache.d.ts'
import type { CrashReport } from '../../../../net/minecraft/CrashReport.d.ts'
import type { CrashReportCategory } from '../../../../net/minecraft/CrashReportCategory.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { SectionPos } from '../../../../net/minecraft/core/SectionPos.d.ts'
import type { ExplosionParticleInfo } from '../../../../net/minecraft/core/particles/ExplosionParticleInfo.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerScoreboard } from '../../../../net/minecraft/server/ServerScoreboard.d.ts'
import type { ServerChunkCache } from '../../../../net/minecraft/server/level/ServerChunkCache.d.ts'
import type { ServerEntityGetter } from '../../../../net/minecraft/server/level/ServerEntityGetter.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { SleepStatus } from '../../../../net/minecraft/server/players/SleepStatus.d.ts'
import type { ServerWaypointManager } from '../../../../net/minecraft/server/waypoints/ServerWaypointManager.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { ProgressListener } from '../../../../net/minecraft/util/ProgressListener.d.ts'
import type { LevelDebugSynchronizers } from '../../../../net/minecraft/util/debug/LevelDebugSynchronizers.d.ts'
import type { WeightedList } from '../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { IntProvider } from '../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { DifficultyInstance } from '../../../../net/minecraft/world/DifficultyInstance.d.ts'
import type { TickRateManager } from '../../../../net/minecraft/world/TickRateManager.d.ts'
import type { EnvironmentAttributeSystem } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeSystem.d.ts'
import type { ServerClockManager } from '../../../../net/minecraft/world/clock/ServerClockManager.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Entity$RemovalReason } from '../../../../net/minecraft/world/entity/Entity$RemovalReason.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../net/minecraft/world/entity/Mob.d.ts'
import type { ReputationEventHandler } from '../../../../net/minecraft/world/entity/ReputationEventHandler.d.ts'
import type { TargetingConditions } from '../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
import type { ReputationEventType } from '../../../../net/minecraft/world/entity/ai/village/ReputationEventType.d.ts'
import type { PoiManager } from '../../../../net/minecraft/world/entity/ai/village/poi/PoiManager.d.ts'
import type { EnderDragon } from '../../../../net/minecraft/world/entity/boss/enderdragon/EnderDragon.d.ts'
import type { EnderDragonPart } from '../../../../net/minecraft/world/entity/boss/enderdragon/EnderDragonPart.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Raid } from '../../../../net/minecraft/world/entity/raid/Raid.d.ts'
import type { Raids } from '../../../../net/minecraft/world/entity/raid/Raids.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { PotionBrewing } from '../../../../net/minecraft/world/item/alchemy/PotionBrewing.d.ts'
import type { RecipeManager } from '../../../../net/minecraft/world/item/crafting/RecipeManager.d.ts'
import type { BlockEventData } from '../../../../net/minecraft/world/level/BlockEventData.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { CustomSpawner } from '../../../../net/minecraft/world/level/CustomSpawner.d.ts'
import type { Explosion$BlockInteraction } from '../../../../net/minecraft/world/level/Explosion$BlockInteraction.d.ts'
import type { ExplosionDamageCalculator } from '../../../../net/minecraft/world/level/ExplosionDamageCalculator.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Level$ExplosionInteraction } from '../../../../net/minecraft/world/level/Level$ExplosionInteraction.d.ts'
import type { StructureManager } from '../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { WorldGenLevel } from '../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Biome } from '../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { FuelValues } from '../../../../net/minecraft/world/level/block/entity/FuelValues.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { WorldBorder } from '../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
import type { ChunkAccess } from '../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { LevelChunk } from '../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { LevelStem } from '../../../../net/minecraft/world/level/dimension/LevelStem.d.ts'
import type { EnderDragonFight } from '../../../../net/minecraft/world/level/dimension/end/EnderDragonFight.d.ts'
import type { EntityTickList } from '../../../../net/minecraft/world/level/entity/EntityTickList.d.ts'
import type { EntityTypeTest } from '../../../../net/minecraft/world/level/entity/EntityTypeTest.d.ts'
import type { LevelEntityGetter } from '../../../../net/minecraft/world/level/entity/LevelEntityGetter.d.ts'
import type { PersistentEntitySectionManager } from '../../../../net/minecraft/world/level/entity/PersistentEntitySectionManager.d.ts'
import type { GameEvent } from '../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { GameEvent$Context } from '../../../../net/minecraft/world/level/gameevent/GameEvent$Context.d.ts'
import type { GameEventDispatcher } from '../../../../net/minecraft/world/level/gameevent/GameEventDispatcher.d.ts'
import type { GameRule } from '../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
import type { GameRules } from '../../../../net/minecraft/world/level/gamerules/GameRules.d.ts'
import type { BoundingBox } from '../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { Structure } from '../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { StructureCheck } from '../../../../net/minecraft/world/level/levelgen/structure/StructureCheck.d.ts'
import type { StructureTemplateManager } from '../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { PathTypeCache } from '../../../../net/minecraft/world/level/pathfinder/PathTypeCache.d.ts'
import type { PortalForcer } from '../../../../net/minecraft/world/level/portal/PortalForcer.d.ts'
import type { Orientation } from '../../../../net/minecraft/world/level/redstone/Orientation.d.ts'
import type { WeatherData } from '../../../../net/minecraft/world/level/saveddata/WeatherData.d.ts'
import type { MapId } from '../../../../net/minecraft/world/level/saveddata/maps/MapId.d.ts'
import type { MapItemSavedData } from '../../../../net/minecraft/world/level/saveddata/maps/MapItemSavedData.d.ts'
import type { LevelData$RespawnData } from '../../../../net/minecraft/world/level/storage/LevelData$RespawnData.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
import type { SavedDataStorage } from '../../../../net/minecraft/world/level/storage/SavedDataStorage.d.ts'
import type { ServerLevelData } from '../../../../net/minecraft/world/level/storage/ServerLevelData.d.ts'
import type { ValueInput } from '../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { LevelTicks } from '../../../../net/minecraft/world/ticks/LevelTicks.d.ts'
export class ServerLevel extends Level implements ServerWorldExtended, ServerLevelAccessor, ServerLevelAccessor, ServerLevelAccessor, AttachmentTargetImpl, ServerLevelCache, ServerEntityGetter, WorldGenLevel {
    static DIRECTIONS: (Object | null)[];
    static END: ResourceKey<Level>;
    static END_SPAWN_POINT: BlockPos;
    static LONG_PARTICLE_CLIP_RANGE: number;
    static MAX_BRIGHTNESS: number;
    static MAX_ENTITY_SPAWN_Y: number;
    static MAX_LEVEL_SIZE: number;
    static MIN_ENTITY_SPAWN_Y: number;
    static NBT_ATTACHMENT_KEY: string;
    static NETHER: ResourceKey<Level>;
    static OVERWORLD: ResourceKey<Level>;
    static RAIN_DELAY: IntProvider;
    static RAIN_DURATION: IntProvider;
    static RESOURCE_KEY_CODEC: Codec<Object>;
    static SHORT_PARTICLE_CLIP_RANGE: number;
    static THUNDER_DURATION: IntProvider;
    static isInSpawnableBounds(parampos: BlockPos): boolean;
    static transfer(paramarg0: AttachmentTarget, paramarg1: AttachmentTarget, paramarg2: boolean): void;
    constructor(server: MinecraftServer, executor: Executor, levelStorage: LevelStorageSource$LevelStorageAccess, levelData: ServerLevelData, dimension: ResourceKey<Level>, levelStem: LevelStem, isDebug: boolean, biomeZoomSeed: number, customSpawners: CustomSpawner[], tickTime: boolean)
    // private apiLookupAccessesWithoutCleanup: number;
    // private apiLookupCaches: Map<Object | null, Object | null>;
    // private blockEvents: BlockEventData[];
    // private blockEventsToReschedule: BlockEventData[];
    readonly blockTicks: LevelTicks<Block>;
    readonly chunkSource: ServerChunkCache;
    // private customSpawners: CustomSpawner[];
    // private debugSynchronizers: LevelDebugSynchronizers;
    readonly dragonFight: EnderDragonFight;
    // private dragonParts: Int2ObjectMap<EnderDragonPart>;
    // private emptyTime: number;
    readonly entityManager: PersistentEntitySectionManager<Entity>;
    // private entityTickList: EntityTickList;
    // private environmentAttributes: EnvironmentAttributeSystem;
    readonly fluidTicks: LevelTicks<Fluid>;
    // private gameEventDispatcher: GameEventDispatcher;
    readonly handlingTick: boolean;
    // private isUpdatingNavigations: boolean;
    // private navigatingMobs: Mob[];
    noSave: boolean;
    // private pathTypesByPosCache: PathTypeCache;
    // private players: ServerPlayer[];
    readonly portalForcer: PortalForcer;
    readonly raids: Raids;
    // private randomPosInChunkCachedPos: BlockPos$MutableBlockPos;
    readonly server: MinecraftServer;
    // private serverLevelData: ServerLevelData;
    // private sleepStatus: SleepStatus;
    // private structureCheck: StructureCheck;
    readonly structureManager: StructureManager;
    // private tickTime: boolean;
    readonly waypointManager: ServerWaypointManager;
    addDuringTeleport(entity: Entity): void;
    // private addEntity(entity: Entity): boolean;
    addFreshEntity(entity: Entity): boolean;
    addLegacyChunkEntities(loaded: Stream<Entity>): void;
    addNewPlayer(player: ServerPlayer): void;
    // private addPlayer(player: ServerPlayer): void;
    addRespawnedPlayer(player: ServerPlayer): void;
    addWithUUID(entity: Entity): boolean;
    addWorldGenChunkEntities(loaded: Stream<Entity>): void;
    // private advanceWeatherCycle(): void;
    // private announceSleepStatus(): void;
    anyPlayerCloseEnoughForSpawning(pos: BlockPos): boolean;
    anyPlayerCloseEnoughForSpawning(pos: ChunkPos): boolean;
    areEntitiesActuallyLoadedAndTicking(pos: ChunkPos): boolean;
    areEntitiesLoaded(chunkKey: number): boolean;
    areEntityNavigationsConsistent(): boolean;
    blockEvent(pos: BlockPos, block: Block, b0: number, b1: number): void;
    broadcastDamageEvent(entity: Entity, source: DamageSource): void;
    broadcastEntityEvent(entity: Entity, event: number): void;
    canSleepThroughNights(): boolean;
    canSpawnEntitiesInChunk(pos: ChunkPos): boolean;
    canSpreadFireAround(pos: BlockPos): boolean;
    clearBlockEvents(bb: BoundingBox): void;
    clockManager(): ServerClockManager;
    close(): void;
    debugSynchronizers(): LevelDebugSynchronizers;
    destroyBlockProgress(id: number, blockPos: BlockPos, progress: number): void;
    // private doBlockEvent(eventData: BlockEventData): boolean;
    dragonParts(): E[];
    // private dumpBlockEntityTickers(output: Writer): void;
    enabledFeatures(): FeatureFlagSet;
    ensureCanWrite(pos: BlockPos): boolean;
    environmentAttributes(): EnvironmentAttributeSystem;
    explode(source: Entity, damageSource: DamageSource, damageCalculator: ExplosionDamageCalculator, x: number, y: number, z: number, r: number, fire: boolean, interactionType: Level$ExplosionInteraction, smallExplosionParticles: ParticleOptions, largeExplosionParticles: ParticleOptions, blockParticles: WeightedList<ExplosionParticleInfo>, explosionSound: Holder<SoundEvent>): void;
    fabric_clearDeferredSyncChanges(): void;
    fabric_computeInitialSyncChanges(arg0: ServerPlayer, arg1: (param0: AttachmentChange) => void): void;
    fabric_getAttachments(): Map<AttachmentType<Object>, Object | null>;
    fabric_getRegistryAccess(): RegistryAccess;
    fabric_getSyncTargetInfo(): AttachmentTargetInfo<Object>;
    fabric_getSyncTargetInfo(): AttachmentTargetInfo<Object>;
    fabric_hasPersistentAttachments(): boolean;
    fabric_invalidateCache(arg0: BlockPos): void;
    fabric_markChanged(arg0: AttachmentType<Object>): void;
    fabric_readAttachmentsFromNbt(arg0: ValueInput): void;
    fabric_registerCache(arg0: BlockPos, arg1: BlockApiCacheImpl<Object, Object>): void;
    fabric_sendAndClearDeferredSyncChanges(arg0: ServerPlayer[]): void;
    fabric_shouldDeferSync(): boolean;
    fabric_shouldTryToSync(): boolean;
    fabric_syncChange(arg0: AttachmentType<Object>, arg1: AttachmentChange): void;
    fabric_syncChange(arg0: AttachmentType<Object>, arg1: AttachmentChange): void;
    fabric_updateSyncTarget(arg0: AttachmentTargetInfo<T>, arg1: AttachmentTargetInfo<T>): void;
    fabric_writeAttachmentsToNbt(arg0: ValueOutput): void;
    fillReportDetails(report: CrashReport): CrashReportCategory;
    findClosestBiome3d(biomeTest: (param0: Holder<Biome>) => kotlin.Boolean, origin: BlockPos, maxSearchRadius: number, sampleResolutionHorizontal: number, sampleResolutionVertical: number): Pair<BlockPos, Holder<Biome>>;
    // private findLightningRod(center: BlockPos): Optional<BlockPos>;
    findLightningTargetAround(pos: BlockPos): BlockPos;
    findNearestMapStructure(structureTag: TagKey<Structure>, origin: BlockPos, maxSearchRadius: number, createReference: boolean): BlockPos;
    fuelValues(): FuelValues;
    gameEvent(gameEvent: Holder<GameEvent>, position: Vec3, context: GameEvent$Context): void;
    gatherChunkSourceStats(): string;
    getAllEntities(): Entity[];
    getBlockTicks(): LevelTicks<Block>;
    getChunkSource(): ServerChunkCache;
    getCurrentDifficultyAt(pos: BlockPos): DifficultyInstance;
    getDataStorage(): SavedDataStorage;
    // private getDestroyType(gameRule: GameRule<boolean>): Explosion$BlockInteraction;
    getDragonFight(): EnderDragonFight;
    getDragons(): EnderDragon[];
    getEntities(): LevelEntityGetter<Entity>;
    getEntities(type: EntityTypeTest<Entity, T>, selector: (param0: T) => kotlin.Boolean): T[];
    getEntities(type: EntityTypeTest<Entity, T>, selector: (param0: T) => kotlin.Boolean, result: T[]): void;
    getEntities(type: EntityTypeTest<Entity, T>, selector: (param0: T) => kotlin.Boolean, result: T[], maxResults: number): void;
    getEntity(id: number): Entity;
    getEntityInAnyDimension(uuid: UUID): Entity;
    getEntityOrPart(id: number): Entity;
    getFluidTicks(): LevelTicks<Fluid>;
    getForceLoadedChunks(): (Object | null)[];
    getFreeMapId(): MapId;
    getGameRules(): GameRules;
    getLevel(): ServerLevel;
    getLogicalHeight(): number;
    getMapData(id: MapId): MapItemSavedData;
    getMoonBrightness(pos: BlockPos): number;
    getNearbyEntities(type: Class<T>, targetConditions: TargetingConditions, source: LivingEntity, bb: AABB): T[];
    getNearbyPlayers(targetConditions: TargetingConditions, source: LivingEntity, bb: AABB): Player[];
    getNearestEntity<T extends LivingEntity>(entities: T[], targetConditions: TargetingConditions, source: LivingEntity, x: number, y: number, z: number): T;
    getNearestEntity<T extends LivingEntity>(type: Class<T>, targetConditions: TargetingConditions, source: LivingEntity, x: number, y: number, z: number, bb: AABB): T;
    getNearestEntity(tag: TagKey<EntityType<Object>>, targetConditions: TargetingConditions, source: LivingEntity, x: number, y: number, z: number, bb: AABB): LivingEntity;
    getNearestPlayer(targetConditions: TargetingConditions, x: number, y: number, z: number): Player;
    getNearestPlayer(targetConditions: TargetingConditions, source: LivingEntity): Player;
    getNearestPlayer(targetConditions: TargetingConditions, source: LivingEntity, x: number, y: number, z: number): Player;
    getPathTypeCache(): PathTypeCache;
    getPlayerInAnyDimension(uuid: UUID): Player;
    getPlayers(selector: (param0: ServerPlayer) => kotlin.Boolean): ServerPlayer[];
    getPlayers(selector: (param0: ServerPlayer) => kotlin.Boolean, maxResults: number): ServerPlayer[];
    getPoiManager(): PoiManager;
    getPortalForcer(): PortalForcer;
    getRaidAt(pos: BlockPos): Raid;
    getRaids(): Raids;
    // private getRandomBlockIndexForRandomTick(): number;
    getRandomPlayer(): ServerPlayer;
    getRespawnData(): LevelData$RespawnData;
    getScoreboard(): ServerScoreboard;
    getSeaLevel(): number;
    getSeed(): number;
    getServer(): MinecraftServer;
    getStructureManager(): StructureTemplateManager;
    getUncachedNoiseBiome(quartX: number, quartY: number, quartZ: number): Holder<Biome>;
    getWatchdogStats(): string;
    getWaypointManager(): ServerWaypointManager;
    getWeatherData(): WeatherData;
    getWorldBorder(): WorldBorder;
    globalAttachments(): GlobalAttachments;
    globalLevelEvent(type: number, pos: BlockPos, data: number): void;
    isAllowedToEnterPortal(toLevel: Level): boolean;
    isCloseToVillage(pos: BlockPos, sectionDistance: number): boolean;
    isCommandBlockEnabled(): boolean;
    isFlat(): boolean;
    isHandlingTick(): boolean;
    isPositionEntityTicking(pos: BlockPos): boolean;
    isPositionTickingWithEntitiesLoaded(key: number): boolean;
    isPvpAllowed(): boolean;
    isRaided(pos: BlockPos): boolean;
    isSpawnerBlockEnabled(): boolean;
    isSpawningMonsters(): boolean;
    isVillage(pos: BlockPos): boolean;
    isVillage(sectionPos: SectionPos): boolean;
    levelEvent(source: Entity, type: number, pos: BlockPos, data: number): void;
    lithium$setNavigationActive(arg0: Mob): void;
    lithium$setNavigationInactive(arg0: Mob): void;
    mayInteract(entity: Entity, pos: BlockPos): boolean;
    neighborChanged(pos: BlockPos, changedBlock: Block, orientation: Orientation): void;
    neighborChanged(state: BlockState, pos: BlockPos, changedBlock: Block, orientation: Orientation, movedByPiston: boolean): void;
    noSave(): boolean;
    onBlockEntityAdded(blockEntity: BlockEntity): void;
    onReputationEvent(type: ReputationEventType, source: Entity, target: ReputationEventHandler): void;
    onStructureStartsAvailable(chunk: ChunkAccess): void;
    playSeededSound(except: Entity, x: number, y: number, z: number, sound: Holder<SoundEvent>, source: SoundSource, volume: number, pitch: number, seed: number): void;
    playSeededSound(except: Entity, sourceEntity: Entity, sound: Holder<SoundEvent>, source: SoundSource, volume: number, pitch: number, seed: number): void;
    players(): ServerPlayer[];
    potionBrewing(): PotionBrewing;
    // private prepareWeather(weatherData: WeatherData): void;
    recipeAccess(): RecipeManager;
    removePlayerImmediately(player: ServerPlayer, reason: Entity$RemovalReason): void;
    resetEmptyTime(): void;
    resetWeatherCycle(): void;
    // private runBlockEvents(): void;
    save(progressListener: ProgressListener, flush: boolean, noSave: boolean): void;
    saveDebugReport(rootDir: Path[]): void;
    // private saveLevelData(sync: boolean): void;
    sectionsToVillage(pos: SectionPos): number;
    sendBlockUpdated(pos: BlockPos, old: BlockState, current: BlockState, updateFlags: number): void;
    sendParticles<T extends ParticleOptions>(particle: T, overrideLimiter: boolean, alwaysShow: boolean, x: number, y: number, z: number, count: number, xDist: number, yDist: number, zDist: number, speed: number): number;
    sendParticles<T extends ParticleOptions>(particle: T, x: number, y: number, z: number, count: number, xDist: number, yDist: number, zDist: number, speed: number): number;
    sendParticles<T extends ParticleOptions>(player: ServerPlayer, particle: T, overrideLimiter: boolean, alwaysShow: boolean, x: number, y: number, z: number, count: number, xDist: number, yDist: number, zDist: number, speed: number): boolean;
    sendParticles(player: ServerPlayer, overrideLimiter: boolean, x: number, y: number, z: number, packet: Packet<Object>): boolean;
    setChunkForced(chunkX: number, chunkZ: number, forced: boolean): boolean;
    setCurrentlyGenerating(currentlyGenerating: () => string): void;
    setDragonFight(fight: EnderDragonFight): void;
    setEnvironmentAttributes(environmentAttributes: EnvironmentAttributeSystem): EnvironmentAttributeSystem;
    setMapData(id: MapId, data: MapItemSavedData): void;
    setRespawnData(respawnData: LevelData$RespawnData): void;
    shouldTickBlocksAt(chunkPos: number): boolean;
    startTickingChunk(levelChunk: LevelChunk): void;
    structureManager(): StructureManager;
    tick(haveTime: () => kotlin.Boolean): void;
    // private tickBlock(pos: BlockPos, type: Block): void;
    tickChunk(chunk: LevelChunk, tickSpeed: number): void;
    tickCustomSpawners(spawnEnemies: boolean): void;
    // private tickFluid(pos: BlockPos, type: Fluid): void;
    tickNonPassenger(entity: Entity): void;
    // private tickPassenger(vehicle: Entity, entity: Entity): void;
    tickPrecipitation(pos: BlockPos): void;
    tickRateManager(): TickRateManager;
    tickThunder(chunk: LevelChunk): void;
    tickTime(): void;
    toString(): string;
    tryAddFreshEntityWithPassengers(entity: Entity): boolean;
    unload(levelChunk: LevelChunk): void;
    updateNeighborsAt(pos: BlockPos, sourceBlock: Block): void;
    updateNeighborsAt(pos: BlockPos, sourceBlock: Block, orientation: Orientation): void;
    updateNeighborsAtExceptFromFacing(pos: BlockPos, blockObject: Block, skipDirection: Direction, orientation: Orientation): void;
    updateNeighboursOnBlockSet(pos: BlockPos, oldState: BlockState): void;
    updatePOIOnBlockStateChange(pos: BlockPos, oldState: BlockState, newState: BlockState): void;
    updateSleepingPlayerList(): void;
    waitForEntities(centerChunk: ChunkPos, radius: number): void;
    // private wakeUpAllPlayers(): void;
}