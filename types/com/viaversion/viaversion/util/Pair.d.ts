import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Pair<X extends Object | number | string | boolean, Y extends Object | number | string | boolean> extends Record {
    constructor(key: X, value: Y)
    // private key: X;
    // private value: Y;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    key(): X;
    toString(): string;
    value(): Y;
}