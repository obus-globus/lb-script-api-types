import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
import type { MapBuilder$Itr } from '../../../kotlin/collections/builders/MapBuilder$Itr.d.ts'
export class MapBuilder$ValuesItr<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends MapBuilder$Itr<K, V> implements Iterator<V> {
    constructor(map: Map<K, V>)
    forEachRemaining(arg0: (param0: T) => void): void;
    next(): V;
}