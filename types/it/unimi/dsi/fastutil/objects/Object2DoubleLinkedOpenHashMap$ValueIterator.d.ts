import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { Object2DoubleLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleLinkedOpenHashMap$MapIterator.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
export class Object2DoubleLinkedOpenHashMap$ValueIterator extends Object2DoubleLinkedOpenHashMap$MapIterator<Object> implements DoubleListIterator {
    constructor(null_: Object2DoubleLinkedOpenHashMap$ValueIterator)
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