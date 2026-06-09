import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockPlaceContext } from '../../../../../net/minecraft/world/item/context/BlockPlaceContext.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { EnumProperty } from '../../../../../net/minecraft/world/level/block/state/properties/EnumProperty.d.ts'
import type { IntegerProperty } from '../../../../../net/minecraft/world/level/block/state/properties/IntegerProperty.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export interface SegmentableBlock extends Object {
    canBeReplaced(state: BlockState, context: BlockPlaceContext, segment: IntegerProperty): boolean;
    getSegmentAmountProperty(): IntegerProperty;
    getShapeCalculator(facing: EnumProperty<Direction>, amount: IntegerProperty): (param0: BlockState) => VoxelShape;
    getShapeHeight(): number;
    getStateForPlacement(context: BlockPlaceContext, block: Block, segment: IntegerProperty, facing: EnumProperty<Direction>): BlockState;
}