import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DataComponentPredicate$PredicateType extends Record {
    static ofDataComponentType(paramarg0: number): DataComponentPredicate$PredicateType;
    static ofPredicateType(paramarg0: number): DataComponentPredicate$PredicateType;
    constructor(id: number, isPredicateType: boolean)
    // private id: number;
    // private isPredicateType: boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): number;
    isPredicateType(): boolean;
    toString(): string;
}