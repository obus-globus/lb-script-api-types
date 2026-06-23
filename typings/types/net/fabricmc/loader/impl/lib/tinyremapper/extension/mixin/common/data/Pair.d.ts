import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
export class Pair<L extends unknown, R extends unknown> extends Object {
    static of(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    private constructor(arg0: L, arg1: R)
    // private first: L;
    // private second: R;
    equals(arg0: Object | null): boolean;
    first(): L;
    hashCode(): number;
    second(): R;
}