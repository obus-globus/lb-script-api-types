import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Long2ObjectOpenHashMap$MapIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/Long2ObjectOpenHashMap$MapIterator.d.ts'
import type { LongConsumer } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongConsumer.d.ts'
import type { LongIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { LongConsumer as LongConsumer_2 } from '../../../../../../java/util/function/LongConsumer.d.ts'
export class Long2ObjectOpenHashMap$KeyIterator extends Long2ObjectOpenHashMap$MapIterator<Object> implements LongIterator {
    constructor(null_: JavaMap<any, any>)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextLong(): number;
    skip(arg0: number): number;
}