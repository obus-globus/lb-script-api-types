import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TransitionConstraint$MergeResult extends Record {
    static Empty: TransitionConstraint$MergeResult;
    // private lhs: number[][];
    // private middle: number[];
    // private rhs: number[][];
    equals(o: Object | null): boolean;
    hashCode(): number;
    lhs(): number[][];
    middle(): number[];
    rhs(): number[][];
    toString(): string;
}