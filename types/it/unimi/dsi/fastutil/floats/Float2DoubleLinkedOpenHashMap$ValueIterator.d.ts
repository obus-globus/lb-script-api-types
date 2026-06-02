import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { Float2DoubleLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleLinkedOpenHashMap$MapIterator.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
export class Float2DoubleLinkedOpenHashMap$ValueIterator extends Float2DoubleLinkedOpenHashMap$MapIterator<(param0: number) => void> implements DoubleListIterator {
    constructor(null_: Float2DoubleLinkedOpenHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    add(arg0: number): void;
    add(arg0: number): void;
    next(): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}