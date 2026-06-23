import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ApproximationBounds<T extends unknown> extends Object {
    constructor(arg0: T, arg1: T)
    readonly lower: T;
    readonly upper: T;
    component1(): T;
    component2(): T;
    equals(arg0: Object | null): boolean;
    getLower(): T;
    getUpper(): T;
    hashCode(): number;
    toString(): string;
}