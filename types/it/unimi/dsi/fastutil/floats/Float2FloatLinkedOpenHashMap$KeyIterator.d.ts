import type { Float2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatLinkedOpenHashMap$MapIterator.d.ts'
import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2FloatLinkedOpenHashMap$KeyIterator extends Float2FloatLinkedOpenHashMap$MapIterator<(param0: number) => void> implements FloatListIterator {
    constructor(null_: Float2FloatLinkedOpenHashMap$KeyIterator)
    constructor(null_: Float2FloatLinkedOpenHashMap$KeyIterator, arg1: number)
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