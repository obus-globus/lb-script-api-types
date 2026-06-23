import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Spliterator } from '../../../java/util/Spliterator.d.ts'
import type { ConcurrentHashMap$Node } from '../../../java/util/concurrent/ConcurrentHashMap$Node.d.ts'
import type { ConcurrentHashMap$Traverser } from '../../../java/util/concurrent/ConcurrentHashMap$Traverser.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class ConcurrentHashMap$EntrySpliterator<K extends unknown, V extends unknown> extends ConcurrentHashMap$Traverser<K, V> implements Spliterator<Map$Entry<K, V>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: ConcurrentHashMap$Node<K, V>[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: Map<K, V>)
    // private est: number;
    // private map: Map<K, V>;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: Map$Entry<K, V>) => void): void;
    getComparator(): (param0: Object) => boolean;
    getExactSizeIfKnown(): number;
    hasCharacteristics(arg0: number): boolean;
    tryAdvance(arg0: (param0: Map$Entry<K, V>) => void): boolean;
    trySplit(): ConcurrentHashMap$EntrySpliterator<K, V>;
}