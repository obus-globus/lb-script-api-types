import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { BitSetDiscreteVoxelShapeAccessor } from '../../../../../net/caffeinemc/mods/lithium/mixin/minimal_nonvanilla/collisions/empty_space/BitSetDiscreteVoxelShapeAccessor.d.ts'
import type { AxisCycle } from '../../../../../net/minecraft/core/AxisCycle.d.ts'
import type { Direction$Axis } from '../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { BooleanOp } from '../../../../../net/minecraft/world/phys/shapes/BooleanOp.d.ts'
import type { DiscreteVoxelShape } from '../../../../../net/minecraft/world/phys/shapes/DiscreteVoxelShape.d.ts'
import type { IndexMerger } from '../../../../../net/minecraft/world/phys/shapes/IndexMerger.d.ts'
export class BitSetDiscreteVoxelShape extends DiscreteVoxelShape implements BitSetDiscreteVoxelShapeAccessor {
    static join(paramfirst: DiscreteVoxelShape, paramsecond: DiscreteVoxelShape, paramxMerger: IndexMerger, paramyMerger: IndexMerger, paramzMerger: IndexMerger, paramop: BooleanOp): BitSetDiscreteVoxelShape;
    static withFilledBounds(paramxSize: number, paramySize: number, paramzSize: number, paramxMin: number, paramyMin: number, paramzMin: number, paramxMax: number, paramyMax: number, paramzMax: number): BitSetDiscreteVoxelShape;
    constructor(xSize: number, ySize: number, zSize: number)
    constructor(voxelShape: DiscreteVoxelShape)
    readonly storage: BitSet;
    // private xMax: number;
    // private xMin: number;
    // private yMax: number;
    // private yMin: number;
    // private zMax: number;
    // private zMin: number;
    // private clearZStrip(startZ: number, endZ: number, x: number, y: number): void;
    fill(x: number, y: number, z: number): void;
    // private fillUpdateBounds(x: number, y: number, z: number, updateBounds: boolean): void;
    firstFull(axis: Direction$Axis): number;
    firstFull(aAxis: Direction$Axis, b: number, c: number): number;
    // private getIndex(x: number, y: number, z: number): number;
    getStorage(): BitSet;
    isEmpty(): boolean;
    isFull(x: number, y: number, z: number): boolean;
    isFull(transform: AxisCycle, x: number, y: number, z: number): boolean;
    isInterior(x: number, y: number, z: number): boolean;
    // private isXZRectangleFull(startX: number, endX: number, startZ: number, endZ: number, y: number): boolean;
    // private isZStripFull(startZ: number, endZ: number, x: number, y: number): boolean;
    lastFull(axis: Direction$Axis): number;
    lastFull(aAxis: Direction$Axis, b: number, c: number): number;
}