import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
import type { MapBuilder$Itr } from '../../../kotlin/collections/builders/MapBuilder$Itr.d.ts'
export class MapBuilder$KeysItr<K extends unknown, V extends unknown> extends MapBuilder$Itr<K, V> implements Iterator<K> {
    constructor(map: JavaMap<K, V>)
    forEachRemaining(arg0: (param0: K) => void): void;
    next(): K;
}