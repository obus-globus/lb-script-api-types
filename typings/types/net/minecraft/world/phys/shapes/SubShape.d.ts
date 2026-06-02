import type { Direction$Axis } from '../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { DiscreteVoxelShape } from '../../../../../net/minecraft/world/phys/shapes/DiscreteVoxelShape.d.ts'
export class SubShape extends DiscreteVoxelShape {
    constructor(parent: DiscreteVoxelShape, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number)
    // private endX: number;
    // private endY: number;
    // private endZ: number;
    // private parent: DiscreteVoxelShape;
    // private startX: number;
    // private startY: number;
    // private startZ: number;
    // private clampToShape(axis: Direction$Axis, parentResult: number): number;
    fill(x: number, y: number, z: number): void;
    firstFull(axis: Direction$Axis): number;
    isFull(x: number, y: number, z: number): boolean;
    lastFull(axis: Direction$Axis): number;
}