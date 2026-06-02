import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Triple<A extends Object | number | string | boolean, B extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Record {
    constructor(first: A, second: B, third: C)
    // private first: A;
    // private second: B;
    // private third: C;
    equals(arg0: Object | null): boolean;
    first(): A;
    hashCode(): number;
    second(): B;
    third(): C;
    toString(): string;
}