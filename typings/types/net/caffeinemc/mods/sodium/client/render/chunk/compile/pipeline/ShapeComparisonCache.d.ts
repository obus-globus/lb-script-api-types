import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ShapeComparisonCache$ShapeComparison } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline/ShapeComparisonCache$ShapeComparison.d.ts'
import type { VoxelShape } from '../../../../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class ShapeComparisonCache extends Object {
    static isEmptyShape(paramarg0: VoxelShape): boolean;
    static isFullShape(paramarg0: VoxelShape): boolean;
    constructor()
    // private cachedComparisonObject: ShapeComparisonCache$ShapeComparison;
    // private comparisonLookupTable: { [key: string]: any };
    // private calculate(arg0: ShapeComparisonCache$ShapeComparison): boolean;
    lookup(arg0: VoxelShape, arg1: VoxelShape): boolean;
    lookup(arg0: VoxelShape, arg1: VoxelShape, arg2: VoxelShape): boolean;
}