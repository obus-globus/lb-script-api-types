import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FilteredMultimap<K extends unknown, V extends unknown> extends Multimap<K, V>, Object {
    entryPredicate(): (param0: Object) => boolean;
    forEach(action: (param0: K, param1: V) => void): void;
    unfiltered(): Multimap<K, V>;
}