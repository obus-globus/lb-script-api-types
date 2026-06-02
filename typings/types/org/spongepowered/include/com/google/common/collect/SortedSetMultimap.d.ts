import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SetMultimap } from '../../../../../../../org/spongepowered/include/com/google/common/collect/SetMultimap.d.ts'
export interface SortedSetMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object, SetMultimap<K, V>{
    get(arg0: K): V[];
    removeAll(arg0: Object): V[];
}