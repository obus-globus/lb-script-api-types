import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArrayVoxelShapeInvoker } from '../../../../../net/caffeinemc/mods/lithium/mixin/minimal_nonvanilla/collisions/empty_space/ArrayVoxelShapeInvoker.d.ts'
import type { Direction$Axis } from '../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { DiscreteVoxelShape } from '../../../../../net/minecraft/world/phys/shapes/DiscreteVoxelShape.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class ArrayVoxelShape extends VoxelShape implements ArrayVoxelShapeInvoker {
    constructor(shape: DiscreteVoxelShape, xs: (Object | null)[], ys: (Object | null)[], zs: (Object | null)[])
    constructor(shape: DiscreteVoxelShape, xs: number[], ys: number[], zs: number[])
    // private xs: (Object | null)[];
    // private ys: (Object | null)[];
    // private zs: (Object | null)[];
    getCoords(axis: Direction$Axis): (Object | null)[];
}