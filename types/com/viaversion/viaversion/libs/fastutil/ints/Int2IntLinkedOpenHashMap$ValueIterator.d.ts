import type { Int2IntLinkedOpenHashMap$MapIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntLinkedOpenHashMap$MapIterator.d.ts'
import type { IntListIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntListIterator.d.ts'
import type { IntConsumer } from '../../../../../../java/util/function/IntConsumer.d.ts'
export class Int2IntLinkedOpenHashMap$ValueIterator extends Int2IntLinkedOpenHashMap$MapIterator<(param0: number) => void> implements IntListIterator {
    constructor(null_: Int2IntLinkedOpenHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    add(arg0: number): void;
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}