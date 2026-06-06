import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { Position } from '../../../../net/minecraft/core/Position.d.ts'
import type { Vec3i } from '../../../../net/minecraft/core/Vec3i.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { Vec2 } from '../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
export class Vec3 extends Object implements Position {
    static CODEC: Codec<Vec3>;
    static LP_STREAM_CODEC: StreamCodec<ByteBuf, Vec3>;
    static STREAM_CODEC: StreamCodec<ByteBuf, Vec3>;
    static X_AXIS: Vec3;
    static Y_AXIS: Vec3;
    static ZERO: Vec3;
    static Z_AXIS: Vec3;
    static applyLocalCoordinatesToRotation(paramrotation: Vec2, paramdirection: Vec3): Vec3;
    static atBottomCenterOf(parampos: Vec3i): Vec3;
    static atCenterOf(parampos: Vec3i): Vec3;
    static atLowerCornerOf(parampos: Vec3i): Vec3;
    static atLowerCornerWithOffset(parampos: Vec3i, paramx: number, paramy: number, paramz: number): Vec3;
    static directionFromRotation(paramrotX: number, paramrotY: number): Vec3;
    static directionFromRotation(paramrotation: Vec2): Vec3;
    static upFromBottomCenterOf(parampos: Vec3i, paramyOffset: number): Vec3;
    constructor(x: number, y: number, z: number)
    constructor(vec: Vec3i)
    constructor(vec: Vector3fc)
    x: number;
    y: number;
    z: number;
    add(value: number): Vec3;
    add(x: number, y: number, z: number): Vec3;
    add(vec: Vec3): Vec3;
    addLocalCoordinates(direction: Vec3): Vec3;
    align(axes: Direction$Axis[]): Vec3;
    closerThan(pos: Position, distance: number): boolean;
    closerThan(vec: Vec3, distanceXZ: number, distanceY: number): boolean;
    cross(vec: Vec3): Vec3;
    distanceTo(vec: Vec3): number;
    distanceToSqr(x: number, y: number, z: number): number;
    distanceToSqr(vec: Vec3): number;
    dot(vec: Vec3): number;
    equals(o: Object | null): boolean;
    get(axis: Direction$Axis): number;
    hashCode(): number;
    horizontal(): Vec3;
    horizontalDistance(): number;
    horizontalDistanceSqr(): number;
    isFinite(): boolean;
    length(): number;
    lengthSqr(): number;
    lerp(vec: Vec3, a: number): Vec3;
    multiply(xScale: number, yScale: number, zScale: number): Vec3;
    multiply(scale: Vec3): Vec3;
    normalize(): Vec3;
    offsetRandom(random: RandomSource, offset: number): Vec3;
    offsetRandomXZ(random: RandomSource, offset: number): Vec3;
    projectedOn(onto: Vec3): Vec3;
    relative(direction: Direction, distance: number): Vec3;
    reverse(): Vec3;
    rotateClockwise90(): Vec3;
    rotation(): Vec2;
    scale(scale: number): Vec3;
    subtract(value: number): Vec3;
    subtract(x: number, y: number, z: number): Vec3;
    subtract(vec: Vec3): Vec3;
    toString(): string;
    toVector3f(): Vector3f;
    vectorTo(vec: Vec3): Vec3;
    with(axis: Direction$Axis, value: number): Vec3;
    xRot(radians: number): Vec3;
    yRot(radians: number): Vec3;
    zRot(radians: number): Vec3;
}