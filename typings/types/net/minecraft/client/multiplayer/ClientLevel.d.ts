import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientWorldAccessor } from '../../../../net/caffeinemc/mods/lithium/common/client/ClientWorldAccessor.d.ts'
import type { ChunkTracker } from '../../../../net/caffeinemc/mods/sodium/client/render/chunk/map/ChunkTracker.d.ts'
import type { ChunkTrackerHolder } from '../../../../net/caffeinemc/mods/sodium/client/render/chunk/map/ChunkTrackerHolder.d.ts'
import type { BiomeSeedProvider } from '../../../../net/caffeinemc/mods/sodium/client/world/BiomeSeedProvider.d.ts'
import type { GlobalAttachments } from '../../../../net/fabricmc/fabric/api/attachment/v1/GlobalAttachments.d.ts'
import type { CrashReport } from '../../../../net/minecraft/CrashReport.d.ts'
import type { CrashReportCategory } from '../../../../net/minecraft/CrashReportCategory.d.ts'
import type { ClientClockManager } from '../../../../net/minecraft/client/ClientClockManager.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { BlockTintCache } from '../../../../net/minecraft/client/color/block/BlockTintCache.d.ts'
import type { CacheSlot } from '../../../../net/minecraft/client/multiplayer/CacheSlot.d.ts'
import type { CacheSlot$Cleaner } from '../../../../net/minecraft/client/multiplayer/CacheSlot$Cleaner.d.ts'
import type { ClientChunkCache } from '../../../../net/minecraft/client/multiplayer/ClientChunkCache.d.ts'
import type { ClientExplosionTracker } from '../../../../net/minecraft/client/multiplayer/ClientExplosionTracker.d.ts'
import type { ClientLevel$ClientLevelData } from '../../../../net/minecraft/client/multiplayer/ClientLevel$ClientLevelData.d.ts'
import type { ClientPacketListener } from '../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { BlockStatePredictionHandler } from '../../../../net/minecraft/client/multiplayer/prediction/BlockStatePredictionHandler.d.ts'
import type { AbstractClientPlayer } from '../../../../net/minecraft/client/player/AbstractClientPlayer.d.ts'
import type { EndFlashState } from '../../../../net/minecraft/client/renderer/EndFlashState.d.ts'
import type { LevelEventHandler } from '../../../../net/minecraft/client/renderer/LevelEventHandler.d.ts'
import type { BlockAndTintGetter } from '../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { LevelExtractor } from '../../../../net/minecraft/client/renderer/extract/LevelExtractor.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ExplosionParticleInfo } from '../../../../net/minecraft/core/particles/ExplosionParticleInfo.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { BlockDestructionProgress } from '../../../../net/minecraft/server/level/BlockDestructionProgress.d.ts'
import type { ParticleStatus } from '../../../../net/minecraft/server/level/ParticleStatus.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { WeightedList } from '../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { TickRateManager } from '../../../../net/minecraft/world/TickRateManager.d.ts'
import type { EnvironmentAttributeSystem } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeSystem.d.ts'
import type { EnvironmentAttributeSystem$Builder } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeSystem$Builder.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Entity$RemovalReason } from '../../../../net/minecraft/world/entity/Entity$RemovalReason.d.ts'
import type { EnderDragonPart } from '../../../../net/minecraft/world/entity/boss/enderdragon/EnderDragonPart.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { PotionBrewing } from '../../../../net/minecraft/world/item/alchemy/PotionBrewing.d.ts'
import type { FireworkExplosion } from '../../../../net/minecraft/world/item/component/FireworkExplosion.d.ts'
import type { RecipeAccess } from '../../../../net/minecraft/world/item/crafting/RecipeAccess.d.ts'
import type { CardinalLighting } from '../../../../net/minecraft/world/level/CardinalLighting.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { ColorResolver } from '../../../../net/minecraft/world/level/ColorResolver.d.ts'
import type { ExplosionDamageCalculator } from '../../../../net/minecraft/world/level/ExplosionDamageCalculator.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Level$ExplosionInteraction } from '../../../../net/minecraft/world/level/Level$ExplosionInteraction.d.ts'
import type { Biome } from '../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { Biome$Precipitation } from '../../../../net/minecraft/world/level/biome/Biome$Precipitation.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { FuelValues } from '../../../../net/minecraft/world/level/block/entity/FuelValues.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { WorldBorder } from '../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
import type { LevelChunk } from '../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { DimensionType } from '../../../../net/minecraft/world/level/dimension/DimensionType.d.ts'
import type { EntityAccess } from '../../../../net/minecraft/world/level/entity/EntityAccess.d.ts'
import type { EntityTickList } from '../../../../net/minecraft/world/level/entity/EntityTickList.d.ts'
import type { EntityTypeTest } from '../../../../net/minecraft/world/level/entity/EntityTypeTest.d.ts'
import type { LevelEntityGetter } from '../../../../net/minecraft/world/level/entity/LevelEntityGetter.d.ts'
import type { TransientEntitySectionManager } from '../../../../net/minecraft/world/level/entity/TransientEntitySectionManager.d.ts'
import type { GameEvent } from '../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { GameEvent$Context } from '../../../../net/minecraft/world/level/gameevent/GameEvent$Context.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { MapId } from '../../../../net/minecraft/world/level/saveddata/maps/MapId.d.ts'
import type { MapItemSavedData } from '../../../../net/minecraft/world/level/saveddata/maps/MapItemSavedData.d.ts'
import type { LevelData$RespawnData } from '../../../../net/minecraft/world/level/storage/LevelData$RespawnData.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { Scoreboard } from '../../../../net/minecraft/world/scores/Scoreboard.d.ts'
import type { LevelTickAccess } from '../../../../net/minecraft/world/ticks/LevelTickAccess.d.ts'
export class ClientLevel extends Level implements ClientWorldAccessor, ChunkTrackerHolder, BiomeSeedProvider, CacheSlot$Cleaner<ClientLevel>, BlockAndTintGetter {
    static ACROSS_THE_WHOLE_WORLD: number;
    static DEFAULT_QUIT_MESSAGE: Component;
    static DIRECTIONS: Direction[];
    static EMPTY: BlockAndTintGetter;
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
    static get(paramarg0: ClientLevel): ChunkTracker;
    static getBiomeZoomSeed(paramarg0: ClientLevel): number;
    static isInSpawnableBounds(parampos: BlockPos): boolean;
    constructor(connection: ClientPacketListener, levelData: ClientLevel$ClientLevelData, dimension: ResourceKey<Level>, dimensionType: Holder<DimensionType>, serverChunkRadius: number, serverSimulationDistance: number, levelExtractor: LevelExtractor, isDebug: boolean, biomeZoomSeed: number, seaLevel: number)
    // private biomeZoomSeed: number;
    // private blockStatePredictionHandler: BlockStatePredictionHandler;
    readonly chunkSource: ClientChunkCache;
    // private chunkTracker: ChunkTracker;
    // private clientLevelData: ClientLevel$ClientLevelData;
    // private connection: ClientPacketListener;
    // private customColorCache: Map<Object, Object>;
    // private destroyingBlocks: { [key: string]: any };
    // private destructionProgress: { [key: string]: any };
    // private dragonParts: EnderDragonPart[];
    // private endFlashState: EndFlashState;
    // private entityStorage: TransientEntitySectionManager<Entity>;
    // private environmentAttributes: EnvironmentAttributeSystem;
    // private explosionTracker: ClientExplosionTracker;
    readonly globallyRenderedBlockEntities: BlockEntity[];
    // private levelEventHandler: LevelEventHandler;
    // private levelExtractor: LevelExtractor;
    // private lightUpdateQueue: () => void[];
    // private mapData: Map<MapId, MapItemSavedData>;
    // private minecraft: Minecraft;
    // private players: AbstractClientPlayer[];
    // private rainSoundTime: number;
    readonly seaLevel: number;
    readonly serverSimulationDistance: number;
    readonly skyFlashTime: number;
    // private tickRateManager: TickRateManager;
    // private tickingEntities: EntityTickList;
    // private tintCaches: Map<(param0: Biome, param1: number, param2: number) => number, BlockTintCache>;
    readonly worldBorder: WorldBorder;
    addAlwaysVisibleParticle(particle: ParticleOptions, overrideLimiter: boolean, x: number, y: number, z: number, xd: number, yd: number, zd: number): void;
    addAlwaysVisibleParticle(particle: ParticleOptions, x: number, y: number, z: number, xd: number, yd: number, zd: number): void;
    addBreakingBlockEffect(pos: BlockPos, direction: Direction): void;
    addDestroyBlockEffect(pos: BlockPos, blockState: BlockState): void;
    addEntity(entity: Entity): void;
    // private addEnvironmentAttributeLayers(environmentAttributes: EnvironmentAttributeSystem$Builder): EnvironmentAttributeSystem$Builder;
    addMapData(mapData: Map<MapId, MapItemSavedData>): void;
    addParticle(particle: ParticleOptions, overrideLimiter: boolean, alwaysShow: boolean, x: number, y: number, z: number, xd: number, yd: number, zd: number): void;
    addParticle(particle: ParticleOptions, x: number, y: number, z: number, xd: number, yd: number, zd: number): void;
    animateTick(xt: number, yt: number, zt: number): void;
    calculateBlockTint(pos: BlockPos, colorResolver: (param0: Biome, param1: number, param2: number) => number): number;
    // private calculateParticleLevel(alwaysShowParticles: boolean): ParticleStatus;
    cardinalLighting(): CardinalLighting;
    clearTintCaches(): void;
    clockManager(): ClientClockManager;
    createFireworks(x: number, y: number, z: number, xd: number, yd: number, zd: number, explosions: FireworkExplosion[]): void;
    destroyBlockProgress(id: number, pos: BlockPos, progress: number): void;
    destructionProgress(): { [key: string]: any };
    disconnect(message: Component): void;
    // private doAddParticle(particle: ParticleOptions, overrideLimiter: boolean, alwaysShowParticles: boolean, x: number, y: number, z: number, xd: number, yd: number, zd: number): void;
    doAnimateTick(xt: number, yt: number, zt: number, r: number, animateRandom: RandomSource, markerParticleTarget: Block, pos: BlockPos$MutableBlockPos): void;
    dragonParts(): EnderDragonPart[];
    enabledFeatures(): FeatureFlagSet;
    endFlashState(): EndFlashState;
    entitiesForRendering(): Entity[];
    environmentAttributes(): EnvironmentAttributeSystem;
    explode(source: Entity, x: number, y: number, z: number, r: number, fire: boolean, blockInteraction: Level$ExplosionInteraction): void;
    explode(source: Entity, x: number, y: number, z: number, r: number, blockInteraction: Level$ExplosionInteraction): void;
    explode(source: Entity, damageSource: DamageSource, damageCalculator: ExplosionDamageCalculator, x: number, y: number, z: number, r: number, fire: boolean, interactionType: Level$ExplosionInteraction): void;
    explode(source: Entity, damageSource: DamageSource, damageCalculator: ExplosionDamageCalculator, x: number, y: number, z: number, r: number, fire: boolean, interactionType: Level$ExplosionInteraction, smallExplosionParticles: ParticleOptions, largeExplosionParticles: ParticleOptions, secondaryParticles: WeightedList<ExplosionParticleInfo>, explosionSound: Holder<SoundEvent>): void;
    explode(source: Entity, damageSource: DamageSource, damageCalculator: ExplosionDamageCalculator, boomPos: Vec3, r: number, fire: boolean, blockInteraction: Level$ExplosionInteraction): void;
    fillReportDetails(report: CrashReport): CrashReportCategory;
    fuelValues(): FuelValues;
    gameEvent(gameEvent: Holder<GameEvent>, pos: BlockPos, context: GameEvent$Context): void;
    gameEvent(gameEvent: Holder<GameEvent>, pos: Vec3, context: GameEvent$Context): void;
    gameEvent(gameEvent: ResourceKey<GameEvent>, pos: BlockPos, context: GameEvent$Context): void;
    gameEvent(sourceEntity: Entity, gameEvent: Holder<GameEvent>, pos: BlockPos): void;
    gameEvent(sourceEntity: Entity, gameEvent: Holder<GameEvent>, pos: Vec3): void;
    gatherChunkSourceStats(): string;
    getAllMapData(): Map<MapId, MapItemSavedData>;
    getBlockStatePredictionHandler(): BlockStatePredictionHandler;
    getBlockTicks(): LevelTickAccess<Block>;
    getBlockTint(pos: BlockPos, resolver: (param0: Biome, param1: number, param2: number) => number): number;
    getChunkSource(): ClientChunkCache;
    getClientLeafTintColor(pos: BlockPos): number;
    getEntities(): LevelEntityGetter<Entity>;
    getEntities(except: Entity, bb: AABB): Entity[];
    getEntities(except: Entity, bb: AABB, selector: (param0: Entity) => boolean): Entity[];
    getEntities<T extends Entity>(type: EntityTypeTest<Entity, T>, bb: AABB, selector: (param0: T) => boolean): T[];
    getEntities<T extends Entity>(type: EntityTypeTest<Entity, T>, bb: AABB, selector: (param0: T) => boolean, output: T[]): void;
    getEntities<T extends Entity>(type: EntityTypeTest<Entity, T>, bb: AABB, selector: (param0: T) => boolean, output: T[], maxResults: number): void;
    getEntity(uuid: UUID): Entity;
    getEntity(id: number): Entity;
    getEntityCount(): number;
    getFluidTicks(): LevelTickAccess<Fluid>;
    getGloballyRenderedBlockEntities(): BlockEntity[];
    getLevelData(): ClientLevel$ClientLevelData;
    getMapData(id: MapId): MapItemSavedData;
    // private getMarkerParticleTarget(): Block;
    getPrecipitationAt(pos: BlockPos): Biome$Precipitation;
    getPushableEntities(pusher: Entity, boundingBox: AABB): Entity[];
    getRespawnData(): LevelData$RespawnData;
    getScoreboard(): Scoreboard;
    getSeaLevel(): number;
    getServerSimulationDistance(): number;
    // private getSkyFlashTime(): number;
    getUncachedNoiseBiome(quartX: number, quartY: number, quartZ: number): Holder<Biome>;
    getWorldBorder(): WorldBorder;
    globalAttachments(): GlobalAttachments;
    globalLevelEvent(type: number, pos: BlockPos, data: number): void;
    handleBlockChangedAck(sequence: number): void;
    hasChunk(chunkX: number, chunkZ: number): boolean;
    isTickingEntity(entity: Entity): boolean;
    levelEvent(type: number, pos: BlockPos, data: number): void;
    levelEvent(source: Entity, type: number, pos: BlockPos, data: number): void;
    lithium$getEntityManager(): TransientEntitySectionManager<EntityAccess>;
    onBlockEntityAdded(blockEntity: BlockEntity): void;
    onChunkLoaded(pos: ChunkPos): void;
    overrideMapData(id: MapId, data: MapItemSavedData): void;
    playLocalSound(x: number, y: number, z: number, sound: SoundEvent, source: SoundSource, volume: number, pitch: number, distanceDelay: boolean): void;
    playLocalSound(pos: BlockPos, sound: SoundEvent, source: SoundSource, volume: number, pitch: number, distanceDelay: boolean): void;
    playLocalSound(sourceEntity: Entity, sound: SoundEvent, source: SoundSource, volume: number, pitch: number): void;
    playPlayerSound(sound: SoundEvent, source: SoundSource, volume: number, pitch: number): void;
    playSeededSound(except: Entity, x: number, y: number, z: number, sound: Holder<SoundEvent>, source: SoundSource, volume: number, pitch: number, seed: number): void;
    playSeededSound(except: Entity, x: number, y: number, z: number, sound: SoundEvent, source: SoundSource, volume: number, pitch: number, seed: number): void;
    playSeededSound(except: Entity, sourceEntity: Entity, sound: Holder<SoundEvent>, source: SoundSource, volume: number, pitch: number, seed: number): void;
    // private playSound(x: number, y: number, z: number, sound: SoundEvent, source: SoundSource, volume: number, pitch: number, distanceDelay: boolean, seed: number): void;
    playSound(except: Entity, x: number, y: number, z: number, sound: Holder<SoundEvent>, source: SoundSource, volume: number, pitch: number): void;
    playSound(except: Entity, x: number, y: number, z: number, sound: SoundEvent, source: SoundSource): void;
    playSound(except: Entity, x: number, y: number, z: number, sound: SoundEvent, source: SoundSource, volume: number, pitch: number): void;
    playSound(except: Entity, pos: BlockPos, soundEvent: SoundEvent, source: SoundSource): void;
    playSound(except: Entity, pos: BlockPos, sound: SoundEvent, source: SoundSource, volume: number, pitch: number): void;
    playSound(except: Entity, sourceEntity: Entity, sound: SoundEvent, source: SoundSource, volume: number, pitch: number): void;
    players(): AbstractClientPlayer[];
    pollLightUpdates(): void;
    potionBrewing(): PotionBrewing;
    queueLightUpdate(update: () => void): void;
    recipeAccess(): RecipeAccess;
    registerForCleaning(slot: CacheSlot<ClientLevel, Object>): void;
    // private removeBlockBreakingProgress(): void;
    removeEntity(id: number, reason: Entity$RemovalReason): void;
    // private removeProgress(block: BlockDestructionProgress): void;
    sendBlockUpdated(pos: BlockPos, old: BlockState, current: BlockState, updateFlags: number): void;
    sendPacketToServer(packet: Packet<any>): void;
    setBlock(pos: BlockPos, blockState: BlockState, updateFlags: number): boolean;
    setBlock(pos: BlockPos, blockState: BlockState, updateFlags: number, updateLimit: number): boolean;
    setBlocksDirty(pos: BlockPos, oldState: BlockState, newState: BlockState): void;
    setRespawnData(respawnData: LevelData$RespawnData): void;
    setSectionDirtyWithNeighbors(chunkX: number, chunkY: number, chunkZ: number): void;
    setSectionRangeDirty(minSectionX: number, minSectionY: number, minSectionZ: number, maxSectionX: number, maxSectionY: number, maxSectionZ: number): void;
    setServerSimulationDistance(serverSimulationDistance: number): void;
    setServerVerifiedBlockState(pos: BlockPos, blockState: BlockState, updateFlag: number): void;
    setSkyFlashTime(skyFlashTime: number): void;
    setTimeFromServer(gameTime: number): void;
    shouldTickDeath(entity: Entity): boolean;
    sodium$getBiomeZoomSeed(): number;
    sodium$getTracker(): ChunkTracker;
    // private spawnFluidParticle(x1: number, x2: number, z1: number, z2: number, y: number, dripParticle: ParticleOptions): void;
    // private spawnParticle(pos: BlockPos, dripParticle: ParticleOptions, dripShape: VoxelShape, height: number): void;
    syncBlockState(pos: BlockPos, state: BlockState, playerPos: Vec3): void;
    tick(haveTime: () => boolean): void;
    tickEntities(): void;
    tickNonPassenger(entity: Entity): void;
    // private tickPassenger(vehicle: Entity, entity: Entity): void;
    tickRateManager(): TickRateManager;
    // private tickTime(): void;
    tickWeatherEffects(): void;
    toString(): string;
    trackExplosionEffects(center: Vec3, radius: number, blockCount: number, blockParticles: WeightedList<ExplosionParticleInfo>): void;
    // private trySpawnDripParticles(pos: BlockPos, state: BlockState, dripParticle: ParticleOptions, isTopSolid: boolean): void;
    unload(levelChunk: LevelChunk): void;
    update(): void;
    // private viaFabricPlus$checkChunk(arg0: Entity): void;
}