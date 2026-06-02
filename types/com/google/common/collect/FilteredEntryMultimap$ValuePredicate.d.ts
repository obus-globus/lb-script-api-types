import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FilteredEntryMultimap$ValuePredicate extends Object implements Predicate<V> {
    constructor(null_: FilteredEntryMultimap$ValuePredicate)
    // private key: K;
    apply<V extends Object | number | string | boolean>(value: V): boolean;
    test<T extends Object | number | string | boolean>(input: T): boolean;
}