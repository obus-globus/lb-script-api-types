import type { Float2LongLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongLinkedOpenHashMap$MapIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
import type { LongConsumer } from '../../../../../java/util/function/LongConsumer.d.ts'
export class Float2LongLinkedOpenHashMap$ValueIterator extends Float2LongLinkedOpenHashMap$MapIterator<(param0: number) => void> implements LongListIterator {
    constructor(null_: Float2LongLinkedOpenHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    add(arg0: number): void;
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}