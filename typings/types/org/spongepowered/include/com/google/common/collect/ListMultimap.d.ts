import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Multimap } from '../../../../../../../org/spongepowered/include/com/google/common/collect/Multimap.d.ts'
export interface ListMultimap<K extends unknown, V extends unknown> extends Object, Multimap<K, V>{
    get(arg0: K): V[];
    removeAll(arg0: Object): V[];
}