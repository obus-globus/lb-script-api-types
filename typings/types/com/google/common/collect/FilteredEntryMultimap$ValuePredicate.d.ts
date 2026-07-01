import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { FilteredEntryMultimap } from '../../../../com/google/common/collect/FilteredEntryMultimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FilteredEntryMultimap$ValuePredicate extends Object implements Predicate<V> {
    constructor(null_: FilteredEntryMultimap<Object, Object>, key: Object)
    // private key: K;
    apply<V extends unknown>(value: V): boolean;
    test<V extends unknown>(input: V): boolean;
}