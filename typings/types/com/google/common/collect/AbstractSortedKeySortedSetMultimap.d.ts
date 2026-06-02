import type { AbstractSortedSetMultimap } from '../../../../com/google/common/collect/AbstractSortedSetMultimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractSortedKeySortedSetMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractSortedSetMultimap<K, V> {
    constructor(map: Map<K, E[]>)
    asMap(): Map<K, E[]>;
    backingMap(): Map<K, E[]>;
    createKeySet(): K[];
    keySet(): K[];
}