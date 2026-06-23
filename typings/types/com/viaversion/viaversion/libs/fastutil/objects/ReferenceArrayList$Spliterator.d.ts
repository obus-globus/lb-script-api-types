import type { ObjectSpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReferenceArrayList$Spliterator extends Object implements ObjectSpliterator<K> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: ReferenceArrayList$Spliterator)
    private constructor(null_: ReferenceArrayList$Spliterator, arg1: number, arg2: number, arg3: boolean)
    // private hasSplit: boolean;
    // private max: number;
    // private pos: number;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining<K extends unknown>(arg0: (param0: K) => void): void;
    // private getWorkingMax(): number;
    skip(arg0: number): number;
    tryAdvance<K extends unknown>(arg0: (param0: K) => void): boolean;
    trySplit<K extends unknown>(): ObjectSpliterator<K>;
}