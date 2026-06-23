import type { ObjectSpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectSpliterator.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../java/lang/Cloneable.d.ts'
export class ObjectSpliterators$EmptySpliterator<K extends unknown> extends Object implements ObjectSpliterator<K>, Serializable, Cloneable {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor()
    characteristics(): number;
    clone(): Object;
    protected clone(): Object;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: K) => void): void;
    // private readResolve(): Object;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: K) => void): boolean;
    trySplit(): ObjectSpliterator<K>;
}