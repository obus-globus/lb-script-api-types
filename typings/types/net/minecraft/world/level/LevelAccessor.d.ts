import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { Difficulty } from '../../../../net/minecraft/world/Difficulty.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { CommonLevelAccessor } from '../../../../net/minecraft/world/level/CommonLevelAccessor.d.ts'
import type { ScheduledTickAccess } from '../../../../net/minecraft/world/level/ScheduledTickAccess.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkSource } from '../../../../net/minecraft/world/level/chunk/ChunkSource.d.ts'
import type { GameEvent } from '../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { GameEvent$Context } from '../../../../net/minecraft/world/level/gameevent/GameEvent$Context.d.ts'
import type { Heightmap$Types } from '../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { LevelData } from '../../../../net/minecraft/world/level/storage/LevelData.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScheduledTick } from '../../../../net/minecraft/world/ticks/ScheduledTick.d.ts'
import type { TickPriority } from '../../../../net/minecraft/world/ticks/TickPriority.d.ts'
export interface LevelAccessor extends Object, CommonLevelAccessor, ScheduledTickAccess{
    addParticle(particle: ParticleOptions, x: number, y: number, z: number, xd: number, yd: number, zd: number): void;
    createTick<T extends Object | number | string | boolean>(pos: BlockPos, type: T, tickDelay: number): ScheduledTick<T>;
    createTick<T extends Object | number | string | boolean>(pos: BlockPos, type: T, tickDelay: number, priority: TickPriority): ScheduledTick<T>;
    gameEvent(gameEvent: Holder<GameEvent>, pos: BlockPos, context: GameEvent$Context): void;
    gameEvent(gameEvent: Holder<GameEvent>, position: Vec3, context: GameEvent$Context): void;
    gameEvent(gameEvent: ResourceKey<GameEvent>, pos: BlockPos, context: GameEvent$Context): void;
    gameEvent(sourceEntity: Entity, gameEvent: Holder<GameEvent>, pos: BlockPos): void;
    gameEvent(sourceEntity: Entity, gameEvent: Holder<GameEvent>, pos: Vec3): void;
    getBlockEntity<T extends BlockEntity>(pos: BlockPos, type: BlockEntityType<T>): Optional<T>;
    getChunkSource(): ChunkSource;
    getDifficulty(): Difficulty;
    getEntityCollisions(source: Entity, testArea: AABB): VoxelShape[];
    getGameTime(): number;
    getHeightmapPos(type: Heightmap$Types, pos: BlockPos): BlockPos;
    getLevelData(): LevelData;
    getRandom(): RandomSource;
    getServer(): MinecraftServer;
    hasChunk(chunkX: number, chunkZ: number): boolean;
    isUnobstructed(source: Entity, shape: VoxelShape): boolean;
    levelEvent(type: number, pos: BlockPos, data: number): void;
    levelEvent(source: Entity, type: number, pos: BlockPos, data: number): void;
    neighborShapeChanged(direction: Direction, pos: BlockPos, neighborPos: BlockPos, neighborState: BlockState, updateFlags: number, updateLimit: number): void;
    nextSubTickCount(): number;
    playSound(except: Entity, pos: BlockPos, soundEvent: SoundEvent, source: SoundSource): void;
    playSound(except: Entity, pos: BlockPos, sound: SoundEvent, source: SoundSource, volume: number, pitch: number): void;
    scheduleTick(pos: BlockPos, type: Block, tickDelay: number): void;
    scheduleTick(pos: BlockPos, type: Block, tickDelay: number, priority: TickPriority): void;
    scheduleTick(pos: BlockPos, type: Fluid, tickDelay: number): void;
    scheduleTick(pos: BlockPos, type: Fluid, tickDelay: number, priority: TickPriority): void;
    updateNeighborsAt(pos: BlockPos, sourceBlock: Block): void;
}