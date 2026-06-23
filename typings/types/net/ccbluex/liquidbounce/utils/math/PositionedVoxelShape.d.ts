import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class PositionedVoxelShape<K extends unknown> extends Object {
    constructor(blockPos: number, key: K, shape: VoxelShape)
    readonly blockPos: number;
    readonly key: K;
    readonly shape: VoxelShape;
    component1(): number;
    component2(): K;
    component3(): VoxelShape;
    copy(blockPos: number, key: K, shape: VoxelShape): PositionedVoxelShape<K>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}