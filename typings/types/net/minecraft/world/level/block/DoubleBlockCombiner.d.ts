import type { BiPredicate } from '../../../../../java/util/function/BiPredicate.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { DoubleBlockCombiner$BlockType } from '../../../../../net/minecraft/world/level/block/DoubleBlockCombiner$BlockType.d.ts'
import type { DoubleBlockCombiner$NeighborCombineResult } from '../../../../../net/minecraft/world/level/block/DoubleBlockCombiner$NeighborCombineResult.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Property } from '../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class DoubleBlockCombiner extends Object {
    static combineWithNeigbour<S extends BlockEntity>(paramentityType: BlockEntityType<S>, paramtypeResolver: (param0: BlockState) => DoubleBlockCombiner$BlockType, paramconnectionResolver: (param0: BlockState) => Direction, paramfacingProperty: Property<Direction>, paramstate: BlockState, paramlevel: LevelAccessor, parampos: BlockPos, paramblockedChecker: (param0: LevelAccessor, param1: BlockPos) => boolean): DoubleBlockCombiner$NeighborCombineResult<S>;
    constructor()
}