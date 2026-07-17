import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractMultimap } from '../../../../../../../org/spongepowered/include/com/google/common/collect/AbstractMultimap.d.ts'
export abstract class AbstractMapBasedMultimap<K extends unknown, V extends unknown> extends AbstractMultimap<K, V> implements Serializable {
    constructor(arg0: JavaMap<K, V[]>)
    // private map: JavaMap<K, V[]>;
    // private totalSize: number;
    clear(): void;
    createAsMap(): JavaMap<K, V[]>;
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