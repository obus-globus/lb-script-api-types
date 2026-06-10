import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Multiset$Entry } from '../../../../com/google/common/collect/Multiset$Entry.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Multisets extends Object {
    static containsOccurrences(paramsuperMultiset: Object[], paramsubMultiset: Object[]): boolean;
    static copyHighestCountFirst(parammultiset: (Object | null)[]): (Object | null)[];
    static difference(parammultiset1: (Object | null)[], parammultiset2: Object[]): (Object | null)[];
    static filter(paramunfiltered: (Object | null)[], parampredicate: (param0: Object) => boolean): (Object | null)[];
    static immutableEntry(parame: Object | null, paramn: number): Multiset$Entry<Object>;
    static intersection(parammultiset1: (Object | null)[], parammultiset2: Object[]): (Object | null)[];
    static removeOccurrences(parammultisetToModify: Object[], paramoccurrencesToRemove: Object[]): boolean;
    static removeOccurrences(parammultisetToModify: Object[], paramoccurrencesToRemove: Object[]): boolean;
    static retainOccurrences(parammultisetToModify: Object[], parammultisetToRetain: Object[]): boolean;
    static sum(parammultiset1: (Object | null)[], parammultiset2: (Object | null)[]): (Object | null)[];
    static toMultiset(paramelementFunction: (param0: Object) => Object | null, paramcountFunction: (param0: Object) => number, parammultisetSupplier: () => Object | null): Collector<Object, Object, Object>;
    static union(parammultiset1: (Object | null)[], parammultiset2: (Object | null)[]): (Object | null)[];
    static unmodifiableMultiset(parammultiset: (Object | null)[]): (Object | null)[];
    static unmodifiableMultiset(parammultiset: (Object | null)[]): (Object | null)[];
    static unmodifiableSortedMultiset(paramsortedMultiset: (Object | null)[]): (Object | null)[];
    private constructor()
}