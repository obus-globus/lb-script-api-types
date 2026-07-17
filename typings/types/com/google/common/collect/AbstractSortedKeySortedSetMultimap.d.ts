import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractSortedSetMultimap } from '../../../../com/google/common/collect/AbstractSortedSetMultimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractSortedKeySortedSetMultimap<K extends unknown, V extends unknown> extends AbstractSortedSetMultimap<K, V> {
    constructor(map: JavaMap<K, V[]>)
    asMap(): JavaMap<K, V[]>;
    backingMap(): JavaMap<K, V[]>;
    createKeySet(): K[];
    keySet(): K[];
}