import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MapIterator } from '../../../../org/apache/commons/collections4/MapIterator.d.ts'
import type { OrderedIterator } from '../../../../org/apache/commons/collections4/OrderedIterator.d.ts'
export interface OrderedMapIterator<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object, MapIterator<K, V>, OrderedIterator<K>{
    hasPrevious(): boolean;
    previous(): K;
}