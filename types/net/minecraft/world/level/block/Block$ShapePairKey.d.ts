import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class Block$ShapePairKey extends Record {
    private constructor(first: VoxelShape, second: VoxelShape)
    // private first: VoxelShape;
    // private second: VoxelShape;
    equals(o: Object | null): boolean;
    first(): VoxelShape;
    hashCode(): number;
    second(): VoxelShape;
    toString(): string;
}