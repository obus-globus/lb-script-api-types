import type { IntConsumer } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntConsumer.d.ts'
import type { IntIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntIterator.d.ts'
import type { Object2IntOpenHashMap$MapIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2IntOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer as IntConsumer_2 } from '../../../../../../java/util/function/IntConsumer.d.ts'
export class Object2IntOpenHashMap$ValueIterator extends Object2IntOpenHashMap$MapIterator<Object> implements IntIterator {
    constructor(null_: { [key: string]: any })
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextInt(): number;
    skip(arg0: number): number;
}