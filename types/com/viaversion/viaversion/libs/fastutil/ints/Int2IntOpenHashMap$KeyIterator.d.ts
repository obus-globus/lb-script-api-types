import type { Int2IntOpenHashMap$MapIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntOpenHashMap$MapIterator.d.ts'
import type { IntConsumer } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntConsumer.d.ts'
import type { IntIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../../java/util/function/IntConsumer.d.ts'
export class Int2IntOpenHashMap$KeyIterator extends Int2IntOpenHashMap$MapIterator<(param0: number) => void> implements IntIterator {
    constructor(null_: Int2IntOpenHashMap$KeyIterator)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextInt(): number;
    skip(arg0: number): number;
}