import type { ObjectSpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectImmutableList$Spliterator extends Object implements ObjectSpliterator<K> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: ObjectImmutableList$Spliterator)
    private constructor(null_: ObjectImmutableList$Spliterator, arg1: number, arg2: number)
    // private max: number;
    // private pos: number;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: K) => void): void;
    skip(arg0: number): number;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: K) => void): boolean;
    trySplit(): ObjectSpliterator<K>;
}