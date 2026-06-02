import type { Byte2FloatOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatOpenCustomHashMap$MapSpliterator.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { FloatSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2FloatOpenCustomHashMap$ValueSpliterator extends Byte2FloatOpenCustomHashMap$MapSpliterator<(param0: number) => void, Byte2FloatOpenCustomHashMap$ValueSpliterator> implements FloatSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Byte2FloatOpenCustomHashMap$ValueSpliterator)
    constructor(null_: Byte2FloatOpenCustomHashMap$ValueSpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    characteristics(): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    getComparator(): (param0: number, param1: number) => kotlin.Int;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Byte2FloatOpenCustomHashMap$ValueSpliterator;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: number) => void): boolean;
}