import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { GenerationChunkHolder } from '../../../../net/minecraft/server/level/GenerationChunkHolder.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { StaticCache2D } from '../../../../net/minecraft/util/StaticCache2D.d.ts'
import type { DifficultyInstance } from '../../../../net/minecraft/world/DifficultyInstance.d.ts'
import type { EnvironmentAttributeReader } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeReader.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { WorldGenLevel } from '../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Biome } from '../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeManager } from '../../../../net/minecraft/world/level/biome/BiomeManager.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { WorldBorder } from '../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
import type { ChunkAccess } from '../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkSource } from '../../../../net/minecraft/world/level/chunk/ChunkSource.d.ts'
import type { ChunkStatus } from '../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { ChunkStep } from '../../../../net/minecraft/world/level/chunk/status/ChunkStep.d.ts'
import type { DimensionType } from '../../../../net/minecraft/world/level/dimension/DimensionType.d.ts'
import type { EntityTypeTest } from '../../../../net/minecraft/world/level/entity/EntityTypeTest.d.ts'
import type { GameEvent } from '../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { GameEvent$Context } from '../../../../net/minecraft/world/level/gameevent/GameEvent$Context.d.ts'
import type { Heightmap$Types } from '../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { LevelLightEngine } from '../../../../net/minecraft/world/level/lighting/LevelLightEngine.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { LevelData } from '../../../../net/minecraft/world/level/storage/LevelData.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { LevelTickAccess } from '../../../../net/minecraft/world/ticks/LevelTickAccess.d.ts'
import type { WorldGenTickAccess } from '../../../../net/minecraft/world/ticks/WorldGenTickAccess.d.ts'
export class WorldGenRegion extends Object implements WorldGenLevel {
    static DIRECTIONS: (Object | null)[];
    constructor(level: ServerLevel, cache: StaticCache2D<GenerationChunkHolder>, generatingStep: ChunkStep, center: ChunkAccess)
    readonly biomeManager: BiomeManager;
    readonly blockTicks: WorldGenTickAccess<Block>;
    // private cache: StaticCache2D<GenerationChunkHolder>;
    readonly center: ChunkAccess;
    readonly currentlyGenerating: () => string;
    // private dimensionType: DimensionType;
    readonly fluidTicks: WorldGenTickAccess<Fluid>;
    // private generatingStep: ChunkStep;
    readonly level: ServerLevel;
    readonly levelData: LevelData;
    readonly random: RandomSource;
    readonly seed: number;
    // private subTickCount: AtomicLong;
    addFreshEntity(entity: Entity): boolean;
    addParticle(particle: ParticleOptions, x: number, y: number, z: number, xd: number, yd: number, zd: number): void;
    destroyBlock(pos: BlockPos, dropResources: boolean, breaker: Entity, updateLimit: number): boolean;
    dimensionType(): DimensionType;
    enabledFeatures(): FeatureFlagSet;
    ensureCanWrite(pos: BlockPos): boolean;
    ensureCanWrite(pos: BlockPos): boolean;
    environmentAttributes(): EnvironmentAttributeReader;
    gameEvent(gameEvent: Holder<GameEvent>, position: Vec3, context: GameEvent$Context): void;
    getBiomeManager(): BiomeManager;
    getBlockEntity(pos: BlockPos): BlockEntity;
    getBlockState(pos: BlockPos): BlockState;
    getBlockTicks(): LevelTickAccess<Block>;
    getCenter(): ChunkPos;
    getChunk(chunkX: number, chunkZ: number): ChunkAccess;
    getChunk(chunkX: number, chunkZ: number, targetStatus: ChunkStatus, loadOrGenerate: boolean): ChunkAccess;
    getChunkSource(): ChunkSource;
    getCurrentDifficultyAt(pos: BlockPos): DifficultyInstance;
    getEntities(except: Entity, bb: AABB, selector: (param0: Entity) => kotlin.Boolean): Entity[];
    getEntities(type: EntityTypeTest<Entity, T>, bb: AABB, selector: (param0: T) => kotlin.Boolean): T[];
    getFluidState(pos: BlockPos): FluidState;
    getFluidTicks(): LevelTickAccess<Fluid>;
    getHeight(): number;
    getHeight(type: Heightmap$Types, x: number, z: number): number;
    getLevel(): ServerLevel;
    getLevelData(): LevelData;
    getLightEngine(): LevelLightEngine;
    getMinY(): number;
    getNearestPlayer(x: number, y: number, z: number, maxDist: number, predicate: (param0: Entity) => kotlin.Boolean): Player;
    getRandom(): RandomSource;
    getSeaLevel(): number;
    getSeed(): number;
    getServer(): MinecraftServer;
    getSkyDarken(): number;
    getUncachedNoiseBiome(quartX: number, quartY: number, quartZ: number): Holder<Biome>;
    getWorldBorder(): WorldBorder;
    hasChunk(chunkX: number, chunkZ: number): boolean;
    isClientSide(): boolean;
    isFluidAtPosition(pos: BlockPos, predicate: (param0: FluidState) => kotlin.Boolean): boolean;
    isOldChunkAround(pos: ChunkPos, range: number): boolean;
    isStateAtPosition(pos: BlockPos, predicate: (param0: BlockState) => kotlin.Boolean): boolean;
    levelEvent(source: Entity, type: number, pos: BlockPos, data: number): void;
    // private markPosForPostprocessing(blockPos: BlockPos): void;
    nextSubTickCount(): number;
    playSound(except: Entity, pos: BlockPos, sound: SoundEvent, source: SoundSource, volume: number, pitch: number): void;
    players(): Player[];
    registryAccess(): RegistryAccess;
    removeBlock(pos: BlockPos, movedByPiston: boolean): boolean;
    setBlock(pos: BlockPos, blockState: BlockState, updateFlags: number, updateLimit: number): boolean;
    setCurrentlyGenerating(currentlyGenerating: () => string): void;
    setCurrentlyGenerating(currentlyGenerating: () => string): void;
}