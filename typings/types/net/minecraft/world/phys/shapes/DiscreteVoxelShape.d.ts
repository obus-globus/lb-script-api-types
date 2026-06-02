import type { OctahedralGroup } from '../../../../../com/mojang/math/OctahedralGroup.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AxisCycle } from '../../../../../net/minecraft/core/AxisCycle.d.ts'
import type { Direction$Axis } from '../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { DiscreteVoxelShape$IntFaceConsumer } from '../../../../../net/minecraft/world/phys/shapes/DiscreteVoxelShape$IntFaceConsumer.d.ts'
import type { DiscreteVoxelShape$IntLineConsumer } from '../../../../../net/minecraft/world/phys/shapes/DiscreteVoxelShape$IntLineConsumer.d.ts'
export abstract class DiscreteVoxelShape extends Object {
    constructor(xSize: number, ySize: number, zSize: number)
    // private xSize: number;
    // private ySize: number;
    // private zSize: number;
    fill(x: number, y: number, z: number): void;
    firstFull(axis: Direction$Axis): number;
    firstFull(aAxis: Direction$Axis, b: number, c: number): number;
    // private forAllAxisEdges(consumer: DiscreteVoxelShape$IntLineConsumer, transform: AxisCycle, mergeNeighbors: boolean): void;
    // private forAllAxisFaces(consumer: DiscreteVoxelShape$IntFaceConsumer, transform: AxisCycle): void;
    forAllBoxes(consumer: DiscreteVoxelShape$IntLineConsumer, mergeNeighbors: boolean): void;
    forAllEdges(consumer: DiscreteVoxelShape$IntLineConsumer, mergeNeighbors: boolean): void;
    forAllFaces(consumer: DiscreteVoxelShape$IntFaceConsumer): void;
    getSize(axis: Direction$Axis): number;
    getXSize(): number;
    getYSize(): number;
    getZSize(): number;
    isEmpty(): boolean;
    isFull(x: number, y: number, z: number): boolean;
    isFull(transform: AxisCycle, x: number, y: number, z: number): boolean;
    isFullWide(x: number, y: number, z: number): boolean;
    isFullWide(transform: AxisCycle, x: number, y: number, z: number): boolean;
    lastFull(axis: Direction$Axis): number;
    lastFull(aAxis: Direction$Axis, b: number, c: number): number;
    rotate(rotation: OctahedralGroup): DiscreteVoxelShape;
}