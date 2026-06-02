import type { LongComparator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongComparator.d.ts'
import type { LongConsumer } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongConsumer.d.ts'
import type { LongSpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongSpliterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractLongSpliterator extends Object implements LongSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor()
}