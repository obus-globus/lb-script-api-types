import type { FilteredMultimap } from '../../../../com/google/common/collect/FilteredMultimap.d.ts'
import type { SetMultimap } from '../../../../com/google/common/collect/SetMultimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FilteredSetMultimap<K extends unknown, V extends unknown> extends FilteredMultimap<K, V>, SetMultimap<K, V>, Object{
    unfiltered(): SetMultimap<K, V>;
}