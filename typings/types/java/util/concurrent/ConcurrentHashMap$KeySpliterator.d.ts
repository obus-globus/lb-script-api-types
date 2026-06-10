import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Spliterator } from '../../../java/util/Spliterator.d.ts'
import type { ConcurrentHashMap$Node } from '../../../java/util/concurrent/ConcurrentHashMap$Node.d.ts'
import type { ConcurrentHashMap$Traverser } from '../../../java/util/concurrent/ConcurrentHashMap$Traverser.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConcurrentHashMap$KeySpliterator<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ConcurrentHashMap$Traverser<K, V> implements Spliterator<K> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: ConcurrentHashMap$Node<K, V>[], arg1: number, arg2: number, arg3: number, arg4: number)
    // private est: number;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: K) => void): void;
    getComparator(): (param0: Object) => boolean;
    getExactSizeIfKnown(): number;
    hasCharacteristics(arg0: number): boolean;
    tryAdvance(arg0: (param0: K) => void): boolean;
    trySplit(): ConcurrentHashMap$KeySpliterator<K, V>;
}