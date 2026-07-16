import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Multiset$Entry } from '../../../../com/google/common/collect/Multiset$Entry.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Multisets extends Object {
    static containsOccurrences(paramsuperMultiset: Object[], paramsubMultiset: Object[]): boolean;
    static copyHighestCountFirst<E extends unknown>(parammultiset: E[]): E[];
    static difference<E extends unknown>(parammultiset1: E[], parammultiset2: Object[]): E[];
    static filter<E extends unknown>(paramunfiltered: E[], parampredicate: (param0: Object) => boolean): E[];
    static immutableEntry<E extends unknown>(parame: E, paramn: number): Multiset$Entry<E>;
    static intersection<E extends unknown>(parammultiset1: E[], parammultiset2: Object[]): E[];
    static removeOccurrences(parammultisetToModify: Object[], paramoccurrencesToRemove: Object[]): boolean;
    static retainOccurrences(parammultisetToModify: Object[], parammultisetToRetain: Object[]): boolean;
    static sum<E extends unknown>(parammultiset1: E[], parammultiset2: E[]): E[];
    static toMultiset<T extends unknown, E extends unknown, M extends E[]>(paramelementFunction: (param0: Object) => E, paramcountFunction: (param0: Object) => number, parammultisetSupplier: () => M): Collector<T, Object, M>;
    static union<E extends unknown>(parammultiset1: E[], parammultiset2: E[]): E[];
    static unmodifiableMultiset<E extends unknown>(parammultiset: E[]): E[];
    static unmodifiableSortedMultiset<E extends unknown>(paramsortedMultiset: E[]): E[];
    private constructor()
}