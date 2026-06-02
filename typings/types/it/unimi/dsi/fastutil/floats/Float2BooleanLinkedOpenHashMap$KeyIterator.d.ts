import type { Float2BooleanLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanLinkedOpenHashMap$MapIterator.d.ts'
import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2BooleanLinkedOpenHashMap$KeyIterator extends Float2BooleanLinkedOpenHashMap$MapIterator<(param0: number) => void> implements FloatListIterator {
    constructor(null_: Float2BooleanLinkedOpenHashMap$KeyIterator)
    constructor(null_: Float2BooleanLinkedOpenHashMap$KeyIterator, arg1: number)
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