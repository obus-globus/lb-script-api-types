import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GeneralUtils$Pair<L extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Record {
    constructor(left: L, right: R)
    // private left: L;
    // private right: R;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): L;
    right(): R;
    toString(): string;
}