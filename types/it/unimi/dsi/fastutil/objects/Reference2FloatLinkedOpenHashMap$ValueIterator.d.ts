import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
import type { Reference2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatLinkedOpenHashMap$MapIterator.d.ts'
export class Reference2FloatLinkedOpenHashMap$ValueIterator extends Reference2FloatLinkedOpenHashMap$MapIterator<Object> implements FloatListIterator {
    constructor(null_: Reference2FloatLinkedOpenHashMap$ValueIterator)
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