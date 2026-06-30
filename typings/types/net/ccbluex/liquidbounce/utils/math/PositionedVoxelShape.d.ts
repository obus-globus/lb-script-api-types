import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class PositionedVoxelShape<K extends unknown> extends Record {
    constructor(blockPos: number, key: K, shape: VoxelShape)
    // private blockPos: number;
    /*not mapped: */ blockPos(): number;
    // private key: K;
    /*not mapped: */ key(): K;
    // private shape: VoxelShape;
    /*not mapped: */ shape(): VoxelShape;
    component1(): number;
    component2(): K;
    component3(): VoxelShape;
    copy(blockPos: number, key: K, shape: VoxelShape): PositionedVoxelShape<K>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}