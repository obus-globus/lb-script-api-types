import type { Object } from '../../../../java/lang/Object.d.ts'
export class Pair<F extends Object | number | string | boolean, S extends Object | number | string | boolean> extends Object {
    static of(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    constructor(arg0: F, arg1: S)
    first: F;
    second: S;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}