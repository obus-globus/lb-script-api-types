import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StateTransitionCanonicalizer$ConstraintDeduplicationKey extends Record {
    // private constraints: number[];
    // private transitionID: number;
    constraints(): number[];
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    transitionID(): number;
}