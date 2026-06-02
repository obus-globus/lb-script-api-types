import type { Double2CharLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharLinkedOpenHashMap$MapIterator.d.ts'
import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
export class Double2CharLinkedOpenHashMap$KeyIterator extends Double2CharLinkedOpenHashMap$MapIterator<(param0: number) => void> implements DoubleListIterator {
    constructor(null_: Double2CharLinkedOpenHashMap$KeyIterator)
    constructor(null_: Double2CharLinkedOpenHashMap$KeyIterator, arg1: number)
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