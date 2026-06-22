import type { LongConsumer } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongConsumer.d.ts'
import type { LongIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { LongConsumer as LongConsumer_2 } from '../../../../../../java/util/function/LongConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractLongIterator extends Object implements LongIterator {
    constructor()
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextLong(): number;
    skip(arg0: number): number;
}