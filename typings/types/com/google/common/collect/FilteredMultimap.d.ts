import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export interface FilteredMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Multimap<K, V>, Object{
    entryPredicate(): (param0: Map$Entry<K, V>) => kotlin.Boolean;
    forEach(action: (param0: K, param1: V) => void): void;
    unfiltered(): Multimap<K, V>;
}