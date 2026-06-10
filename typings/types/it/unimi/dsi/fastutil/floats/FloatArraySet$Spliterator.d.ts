import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { FloatSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatArraySet$Spliterator extends Object implements FloatSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: FloatArraySet$Spliterator)
    private constructor(null_: FloatArraySet$Spliterator, arg1: number, arg2: number, arg3: boolean)
    // private hasSplit: boolean;
    // private max: number;
    // private pos: number;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    getComparator(): (param0: number, param1: number) => number;
    // private getWorkingMax(): number;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: number) => void): boolean;
    trySplit(): FloatSpliterator;
}