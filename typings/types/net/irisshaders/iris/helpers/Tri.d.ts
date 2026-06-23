import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Tri<X extends unknown, Y extends unknown, Z extends unknown> extends Record {
    constructor(first: X, second: Y, third: Z)
    // private first: X;
    // private second: Y;
    // private third: Z;
    equals(arg0: Object | null): boolean;
    first(): X;
    hashCode(): number;
    second(): Y;
    third(): Z;
    toString(): string;
}