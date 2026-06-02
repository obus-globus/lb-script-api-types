import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Direction$Axis } from '../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class SliceShape extends VoxelShape {
    constructor(delegate: VoxelShape, axis: Direction$Axis, point: number)
    // private axis: Direction$Axis;
    // private delegate: VoxelShape;
    getCoords(axis: Direction$Axis): (Object | null)[];
}