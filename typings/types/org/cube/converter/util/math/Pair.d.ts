import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Pair<A extends unknown, B extends unknown> extends Record {
    constructor(left: A, right: B)
    // private left: A;
    // private right: B;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): A;
    right(): B;
    toString(): string;
}