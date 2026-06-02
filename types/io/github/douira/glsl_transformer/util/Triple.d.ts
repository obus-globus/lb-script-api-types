import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Triple<V extends Object | number | string | boolean> extends Object {
    constructor(arg0: V, arg1: V, arg2: V)
    a: V;
    b: V;
    c: V;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}