import type { Float2ObjectOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectOpenCustomHashMap$MapSpliterator.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { FloatSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ObjectOpenCustomHashMap$KeySpliterator extends Float2ObjectOpenCustomHashMap$MapSpliterator<Object, any> implements FloatSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Float2ObjectOpenCustomHashMap$KeySpliterator)
    constructor(null_: Float2ObjectOpenCustomHashMap$KeySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    characteristics(): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    getComparator(): (param0: number, param1: number) => number;
    makeForSplit<V extends unknown>(arg0: number, arg1: number, arg2: boolean): Float2ObjectOpenCustomHashMap$KeySpliterator;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: number) => void): boolean;
}