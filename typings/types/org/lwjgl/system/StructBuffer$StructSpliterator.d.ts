import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Spliterator } from '../../../java/util/Spliterator.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
export class StructBuffer$StructSpliterator<T extends Struct<T>> extends Object implements Spliterator<T> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: number, arg1: ByteBuffer, arg2: T, arg3: number, arg4: number)
    // private address: number;
    // private container: ByteBuffer;
    // private factory: T;
    // private fence: number;
    // private index: number;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: T) => void): void;
    getComparator(): (param0: T, param1: T) => number;
    getExactSizeIfKnown(): number;
    hasCharacteristics(arg0: number): boolean;
    tryAdvance(arg0: (param0: T) => void): boolean;
    trySplit(): Spliterator<T>;
}