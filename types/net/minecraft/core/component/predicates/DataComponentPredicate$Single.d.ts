import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentPredicate } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
import type { DataComponentPredicate$Type } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
export class DataComponentPredicate$Single<T extends DataComponentPredicate> extends Record {
    constructor(type: DataComponentPredicate$Type<T>, predicate: T)
    // private predicate: T;
    // private type: DataComponentPredicate$Type<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    predicate(): T;
    toString(): string;
    type(): DataComponentPredicate$Type<T>;
}