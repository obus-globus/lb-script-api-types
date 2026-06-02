import type { Float2ShortLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortLinkedOpenHashMap$MapIterator.d.ts'
import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2ShortLinkedOpenHashMap$KeyIterator extends Float2ShortLinkedOpenHashMap$MapIterator<(param0: number) => void> implements FloatListIterator {
    constructor(null_: Float2ShortLinkedOpenHashMap$KeyIterator)
    constructor(null_: Float2ShortLinkedOpenHashMap$KeyIterator, arg1: number)
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