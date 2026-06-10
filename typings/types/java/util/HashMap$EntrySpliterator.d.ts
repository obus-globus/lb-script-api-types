import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { HashMap$HashMapSpliterator } from '../../java/util/HashMap$HashMapSpliterator.d.ts'
import type { Spliterator } from '../../java/util/Spliterator.d.ts'
import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../java/util/Map$Entry.d.ts'
export class HashMap$EntrySpliterator<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends HashMap$HashMapSpliterator<K, V> implements Spliterator<Map$Entry<K, V>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: Map<K, V>, arg1: number, arg2: number, arg3: number, arg4: number)
    characteristics(): number;
    forEachRemaining(arg0: (param0: Map$Entry<K, V>) => void): void;
    getComparator(): (param0: Object) => boolean;
    getExactSizeIfKnown(): number;
    hasCharacteristics(arg0: number): boolean;
    tryAdvance(arg0: (param0: Map$Entry<K, V>) => void): boolean;
    trySplit(): HashMap$EntrySpliterator<K, V>;
}