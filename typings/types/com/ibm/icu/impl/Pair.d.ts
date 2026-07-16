import type { Object } from '../../../../java/lang/Object.d.ts'
export class Pair<F extends unknown, S extends unknown> extends Object {
    static of<F extends unknown, S extends unknown>(paramarg0: F, paramarg1: S): Pair<F, S>;
    constructor(arg0: F, arg1: S)
    first: F;
    second: S;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}