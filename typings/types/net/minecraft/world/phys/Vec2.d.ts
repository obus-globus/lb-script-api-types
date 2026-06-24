import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Vec2 extends Object {
    static CODEC: Codec<Vec2>;
    static MAX: Vec2;
    static MIN: Vec2;
    static NEG_UNIT_X: Vec2;
    static NEG_UNIT_Y: Vec2;
    static ONE: Vec2;
    static UNIT_X: Vec2;
    static UNIT_Y: Vec2;
    static ZERO: Vec2;
    constructor(x: number, y: number)
    x: number;
    y: number;
    add(v: number): Vec2;
    add(rhs: Vec2): Vec2;
    distanceToSqr(p: Vec2): number;
    dot(v: Vec2): number;
    equals(rhs: Object | null): boolean;
    hashCode(): number;
    length(): number;
    lengthSquared(): number;
    negated(): Vec2;
    normalized(): Vec2;
    rotate(angleRadians: number): Vec2;
    scale(s: number): Vec2;
}