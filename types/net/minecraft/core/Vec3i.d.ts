import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
import type { Direction } from '../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../net/minecraft/core/Direction$Axis.d.ts'
import type { Position } from '../../../net/minecraft/core/Position.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Vector3i } from '../../../org/joml/Vector3i.d.ts'
export class Vec3i extends Object implements Comparable<Vec3i> {
    static CODEC: Codec<Vec3i>;
    static STREAM_CODEC: StreamCodec<ByteBuf, Vec3i>;
    static ZERO: Vec3i;
    static offsetCodec(parammaxOffsetPerAxis: number): Codec<Vec3i>;
    constructor(x: number, y: number, z: number)
    readonly x: number;
    readonly y: number;
    readonly z: number;
    above(): Vec3i;
    above(steps: number): Vec3i;
    below(): Vec3i;
    below(steps: number): Vec3i;
    closerThan(pos: Vec3i, distance: number): boolean;
    closerToCenterThan(pos: Position, distance: number): boolean;
    compareTo(pos: Vec3i): number;
    cross(upVector: Vec3i): Vec3i;
    distChessboard(pos: Vec3i): number;
    distManhattan(arg0: Vec3i): number;
    distSqr(pos: Vec3i): number;
    distToCenterSqr(x: number, y: number, z: number): number;
    distToCenterSqr(pos: Position): number;
    distToLowCornerSqr(x: number, y: number, z: number): number;
    east(): Vec3i;
    east(steps: number): Vec3i;
    equals(o: Object | null): boolean;
    get(axis: Direction$Axis): number;
    getX(): number;
    getY(): number;
    getZ(): number;
    hashCode(): number;
    multiply(scale: number): Vec3i;
    multiply(xScale: number, yScale: number, zScale: number): Vec3i;
    north(): Vec3i;
    north(steps: number): Vec3i;
    offset(x: number, y: number, z: number): Vec3i;
    offset(vec: Vec3i): Vec3i;
    relative(direction: Direction): Vec3i;
    relative(direction: Direction, steps: number): Vec3i;
    relative(axis: Direction$Axis, steps: number): Vec3i;
    setX(x: number): Vec3i;
    setY(y: number): Vec3i;
    setZ(z: number): Vec3i;
    south(): Vec3i;
    south(steps: number): Vec3i;
    subtract(vec: Vec3i): Vec3i;
    toMutable(): Vector3i;
    toShortString(): string;
    toString(): string;
    west(): Vec3i;
    west(steps: number): Vec3i;
}