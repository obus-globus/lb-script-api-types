import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
import type { Short2IntLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntLinkedOpenHashMap$MapIterator.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
export class Short2IntLinkedOpenHashMap$ValueIterator extends Short2IntLinkedOpenHashMap$MapIterator<(param0: number) => void> implements IntListIterator {
    constructor(null_: Short2IntLinkedOpenHashMap$ValueIterator)
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