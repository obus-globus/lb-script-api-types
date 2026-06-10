import type { DistanceMetric } from '../../../../../com/seedfinding/mccore/util/math/DistanceMetric.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Vec3i extends Object {
    static ZERO: Vec3i;
    constructor(arg0: number, arg1: number, arg2: number)
    readonly x: number;
    readonly y: number;
    readonly z: number;
    distanceTo(arg0: Vec3i, arg1: (param0: number, param1: number, param2: number) => number): number;
    equals(arg0: Object | null): boolean;
    get2DMirrored(): Vec3i;
    getMagnitude(): number;
    getMagnitudeSq(): number;
    getX(): number;
    getY(): number;
    getZ(): number;
    hashCode(): number;
    invert(): Vec3i;
    toString(): string;
}