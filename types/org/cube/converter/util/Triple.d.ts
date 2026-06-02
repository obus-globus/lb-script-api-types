import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Triple<A extends Object | number | string | boolean, B extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Record {
    constructor(left: A, middle: B, right: C)
    // private left: A;
    // private middle: B;
    // private right: C;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): A;
    middle(): B;
    right(): C;
    toString(): string;
}