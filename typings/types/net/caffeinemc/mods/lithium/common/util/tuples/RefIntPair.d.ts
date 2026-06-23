import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class RefIntPair<A extends unknown> extends Record {
    // private left: A;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): A;
    right(): number;
    toString(): string;
}