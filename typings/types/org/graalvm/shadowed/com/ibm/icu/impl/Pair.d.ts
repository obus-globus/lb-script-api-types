import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Pair<F extends unknown, S extends unknown> extends Object {
    static of(paramfirst: Object | null, paramsecond: Object | null): Pair<Object, Object>;
    constructor(first: F, second: S)
    first: F;
    second: S;
    equals(other: Object | null): boolean;
    hashCode(): number;
}