import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Pair<F extends unknown, S extends unknown> extends Object {
    static of<F extends unknown, S extends unknown>(paramfirst: F, paramsecond: S): Pair<F, S>;
    constructor(first: F, second: S)
    first: F;
    second: S;
    equals(other: Object | null): boolean;
    hashCode(): number;
}