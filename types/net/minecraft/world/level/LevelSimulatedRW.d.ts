import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LevelSimulatedReader } from '../../../../net/minecraft/world/level/LevelSimulatedReader.d.ts'
import type { LevelWriter } from '../../../../net/minecraft/world/level/LevelWriter.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface LevelSimulatedRW extends Object, LevelSimulatedReader, LevelWriter{
    addFreshEntity(entity: Entity): boolean;
    destroyBlock(pos: BlockPos, dropResources: boolean): boolean;
    destroyBlock(pos: BlockPos, dropResources: boolean, breaker: Entity): boolean;
    setBlock(pos: BlockPos, blockState: BlockState, updateFlags: number): boolean;
}