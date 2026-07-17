import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractMapBasedMultimap } from '../../../../../../../org/spongepowered/include/com/google/common/collect/AbstractMapBasedMultimap.d.ts'
import type { ListMultimap } from '../../../../../../../org/spongepowered/include/com/google/common/collect/ListMultimap.d.ts'
export abstract class AbstractListMultimap<K extends unknown, V extends unknown> extends AbstractMapBasedMultimap<K, V> implements ListMultimap<K, V> {
    constructor(arg0: JavaMap<K, V[]>)
    asMap(): JavaMap<K, V[]>;
    createCollection(): V[];
    createCollection(arg0: K): V[];
    createUnmodifiableEmptyCollection(): V[];
    equals(arg0: Object | null): boolean;
    get(arg0: K): V[];
    put(arg0: K, arg1: V): boolean;
    removeAll(arg0: Object): V[];
}