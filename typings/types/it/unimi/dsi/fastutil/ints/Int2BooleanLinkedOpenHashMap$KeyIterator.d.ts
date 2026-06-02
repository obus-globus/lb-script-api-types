import type { Int2BooleanLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanLinkedOpenHashMap$MapIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
export class Int2BooleanLinkedOpenHashMap$KeyIterator extends Int2BooleanLinkedOpenHashMap$MapIterator<(param0: number) => void> implements IntListIterator {
    constructor(null_: Int2BooleanLinkedOpenHashMap$KeyIterator)
    constructor(null_: Int2BooleanLinkedOpenHashMap$KeyIterator, arg1: number)
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