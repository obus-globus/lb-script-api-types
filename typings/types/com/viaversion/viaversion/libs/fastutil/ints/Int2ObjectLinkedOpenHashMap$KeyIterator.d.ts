import type { Int2ObjectLinkedOpenHashMap$MapIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2ObjectLinkedOpenHashMap$MapIterator.d.ts'
import type { IntListIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntListIterator.d.ts'
import type { IntConsumer } from '../../../../../../java/util/function/IntConsumer.d.ts'
export class Int2ObjectLinkedOpenHashMap$KeyIterator extends Int2ObjectLinkedOpenHashMap$MapIterator<Object> implements IntListIterator {
    constructor(null_: Int2ObjectLinkedOpenHashMap$KeyIterator)
    constructor(null_: Int2ObjectLinkedOpenHashMap$KeyIterator, arg1: number)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}