import type { Object } from '../../../java/lang/Object.d.ts'
export class Quintet<A extends Object | number | string | boolean, B extends Object | number | string | boolean, C extends Object | number | string | boolean, D extends Object | number | string | boolean, E extends Object | number | string | boolean> extends Object {
    constructor(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E)
    readonly a: A;
    readonly b: B;
    readonly c: C;
    readonly d: D;
    readonly e: E;
    getA(): A;
    getB(): B;
    getC(): C;
    getD(): D;
    getE(): E;
}