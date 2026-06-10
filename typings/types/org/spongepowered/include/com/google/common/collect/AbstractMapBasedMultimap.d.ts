import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractMultimap } from '../../../../../../../org/spongepowered/include/com/google/common/collect/AbstractMultimap.d.ts'
export abstract class AbstractMapBasedMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractMultimap<K, V> implements Serializable {
    constructor(arg0: Map<K, V[]>)
    // private map: Map<K, V[]>;
    // private totalSize: number;
    clear(): void;
    createAsMap(): Map<K, V[]>;
    createCollection(): V[];
    createCollection(arg0: K): V[];
    createKeySet(): K[];
    createUnmodifiableEmptyCollection(): V[];
    get(arg0: K): V[];
    put(arg0: K, arg1: V): boolean;
    removeAll(arg0: Object): V[];
    // private removeValuesForKey(arg0: Object): void;
    wrapCollection(arg0: K, arg1: V[]): V[];
    // private wrapList(arg0: K, arg1: V[], arg2: (Object | null)[]): V[];
}