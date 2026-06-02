import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
import type { Short2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatLinkedOpenHashMap$MapIterator.d.ts'
export class Short2FloatLinkedOpenHashMap$ValueIterator extends Short2FloatLinkedOpenHashMap$MapIterator<(param0: number) => void> implements FloatListIterator {
    constructor(null_: Short2FloatLinkedOpenHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    add(arg0: number): void;
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}