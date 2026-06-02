import type { Long2LongLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongLinkedOpenHashMap$MapIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
import type { LongConsumer } from '../../../../../java/util/function/LongConsumer.d.ts'
export class Long2LongLinkedOpenHashMap$KeyIterator extends Long2LongLinkedOpenHashMap$MapIterator<(param0: number) => void> implements LongListIterator {
    constructor(null_: Long2LongLinkedOpenHashMap$KeyIterator)
    constructor(null_: Long2LongLinkedOpenHashMap$KeyIterator, arg1: number)
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