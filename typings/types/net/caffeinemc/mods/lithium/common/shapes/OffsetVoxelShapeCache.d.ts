import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export interface OffsetVoxelShapeCache extends Object{
    lithium$getOffsetSimplifiedShape(arg0: number, arg1: Direction): VoxelShape;
    lithium$setShape(arg0: number, arg1: Direction, arg2: VoxelShape): void;
}