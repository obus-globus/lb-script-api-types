import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface LevelWriter extends Object{
    addFreshEntity(entity: Entity): boolean;
    destroyBlock(pos: BlockPos, dropResources: boolean): boolean;
    destroyBlock(pos: BlockPos, dropResources: boolean, breaker: Entity): boolean;
    destroyBlock(pos: BlockPos, dropResources: boolean, breaker: Entity, updateLimit: number): boolean;
    removeBlock(pos: BlockPos, movedByPiston: boolean): boolean;
    setBlock(pos: BlockPos, blockState: BlockState, updateFlags: number): boolean;
    setBlock(pos: BlockPos, blockState: BlockState, updateFlags: number, updateLimit: number): boolean;
}