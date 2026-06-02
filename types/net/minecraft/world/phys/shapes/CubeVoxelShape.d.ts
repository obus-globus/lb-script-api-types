import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Direction$Axis } from '../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { DiscreteVoxelShape } from '../../../../../net/minecraft/world/phys/shapes/DiscreteVoxelShape.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class CubeVoxelShape extends VoxelShape {
    constructor(shape: DiscreteVoxelShape)
    // private list: (Object | null)[][];
    findIndex(axis: Direction$Axis, coord: number): number;
    getCoords(arg0: Direction$Axis): (Object | null)[];
}