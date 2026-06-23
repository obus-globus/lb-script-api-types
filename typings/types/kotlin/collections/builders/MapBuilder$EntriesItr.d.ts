import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
import type { MapBuilder$EntryRef } from '../../../kotlin/collections/builders/MapBuilder$EntryRef.d.ts'
import type { MapBuilder$Itr } from '../../../kotlin/collections/builders/MapBuilder$Itr.d.ts'
export class MapBuilder$EntriesItr<K extends unknown, V extends unknown> extends MapBuilder$Itr<K, V> implements Iterator<Map$Entry<K, V>> {
    constructor(map: Map<K, V>)
    forEachRemaining(arg0: (param0: Map$Entry<K, V>) => void): void;
    next(): MapBuilder$EntryRef<K, V>;
    nextAppendString(sb: StringBuilder): void;
    nextHashCode(): number;
}