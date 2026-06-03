import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractMapBasedMultimap } from '../../../../../../../org/spongepowered/include/com/google/common/collect/AbstractMapBasedMultimap.d.ts'
import type { ListMultimap } from '../../../../../../../org/spongepowered/include/com/google/common/collect/ListMultimap.d.ts'
export abstract class AbstractListMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractMapBasedMultimap<K, V> implements ListMultimap<K, V> {
    constructor(arg0: Map<K, E[]>)
    asMap(): Map<K, E[]>;
    createCollection(): V[];
    createCollection(arg0: K): E[];
    createUnmodifiableEmptyCollection(): V[];
    equals(arg0: Object | null): boolean;
    get(arg0: K): V[];
    put(arg0: K, arg1: V): boolean;
    removeAll(arg0: Object): V[];
}