import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { Difficulty } from '../../../../net/minecraft/world/Difficulty.d.ts'
import type { DifficultyInstance } from '../../../../net/minecraft/world/DifficultyInstance.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LevelAccessor } from '../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { GameEvent } from '../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { GameEvent$Context } from '../../../../net/minecraft/world/level/gameevent/GameEvent$Context.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { ScheduledTick } from '../../../../net/minecraft/world/ticks/ScheduledTick.d.ts'
import type { TickPriority } from '../../../../net/minecraft/world/ticks/TickPriority.d.ts'
export interface ServerLevelAccessor extends Object, LevelAccessor{
    addFreshEntityWithPassengers(entity: Entity): void;
    createTick<T extends Object | number | string | boolean>(pos: BlockPos, type: T, tickDelay: number): ScheduledTick<T>;
    createTick<T extends Object | number | string | boolean>(pos: BlockPos, type: T, tickDelay: number, priority: TickPriority): ScheduledTick<T>;
    gameEvent(gameEvent: Holder<GameEvent>, pos: BlockPos, context: GameEvent$Context): void;
    gameEvent(gameEvent: ResourceKey<GameEvent>, pos: BlockPos, context: GameEvent$Context): void;
    gameEvent(sourceEntity: Entity, gameEvent: Holder<GameEvent>, pos: BlockPos): void;
    gameEvent(sourceEntity: Entity, gameEvent: Holder<GameEvent>, pos: Vec3): void;
    getCurrentDifficultyAt(pos: BlockPos): DifficultyInstance;
    getDifficulty(): Difficulty;
    getGameTime(): number;
    getLevel(): ServerLevel;
    hasChunk(chunkX: number, chunkZ: number): boolean;
    levelEvent(type: number, pos: BlockPos, data: number): void;
    neighborShapeChanged(direction: Direction, pos: BlockPos, neighborPos: BlockPos, neighborState: BlockState, updateFlags: number, updateLimit: number): void;
    playSound(except: Entity, pos: BlockPos, soundEvent: SoundEvent, source: SoundSource): void;
    updateNeighborsAt(pos: BlockPos, sourceBlock: Block): void;
}