import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OffsetVoxelShapeCache } from '../../../../../net/caffeinemc/mods/lithium/common/shapes/OffsetVoxelShapeCache.d.ts'
import type { AxisCycle } from '../../../../../net/minecraft/core/AxisCycle.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { Vec3i } from '../../../../../net/minecraft/core/Vec3i.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { BlockHitResult } from '../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { DiscreteVoxelShape } from '../../../../../net/minecraft/world/phys/shapes/DiscreteVoxelShape.d.ts'
import type { Shapes$DoubleLineConsumer } from '../../../../../net/minecraft/world/phys/shapes/Shapes$DoubleLineConsumer.d.ts'
export abstract class VoxelShape extends Object implements OffsetVoxelShapeCache {
    constructor(shape: DiscreteVoxelShape)
    // private faces: VoxelShape[];
    // private offsetAndSimplified: VoxelShape[];
    shape: DiscreteVoxelShape;
    bounds(): AABB;
    // private calculateFace(direction: Direction): VoxelShape;
    clip(from: Vec3, to: Vec3, pos: BlockPos): BlockHitResult;
    closestPointTo(point: Vec3): Optional<Vec3>;
    collide(axis: Direction$Axis, moving: AABB, distance: number): number;
    collideX(arg0: AxisCycle, arg1: AABB, arg2: number): number;
    equals(obj: Object | null): boolean;
    findIndex(arg0: Direction$Axis, arg1: number): number;
    forAllBoxes(consumer: Shapes$DoubleLineConsumer): void;
    forAllEdges(consumer: Shapes$DoubleLineConsumer): void;
    get(axis: Direction$Axis, i: number): number;
    getCoords(axis: Direction$Axis): (Object | null)[];
    getFaceShape(direction: Direction): VoxelShape;
    isCubeLike(): boolean;
    // private isCubeLikeAlong(axis: Direction$Axis): boolean;
    isEmpty(): boolean;
    lithium$getOffsetSimplifiedShape(arg0: number, arg1: Direction): VoxelShape;
    lithium$setShape(arg0: number, arg1: Direction, arg2: VoxelShape): void;
    max(axis: Direction$Axis): number;
    max(aAxis: Direction$Axis, b: number, c: number): number;
    min(axis: Direction$Axis): number;
    min(aAxis: Direction$Axis, b: number, c: number): number;
    move(dx: number, dy: number, dz: number): VoxelShape;
    move(delta: Vec3i): VoxelShape;
    move(delta: Vec3): VoxelShape;
    optimize(): VoxelShape;
    singleEncompassing(): VoxelShape;
    toAabbs(): AABB[];
    toString(): string;
}