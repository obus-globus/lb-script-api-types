import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Long2BooleanLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanLinkedOpenHashMap$MapIterator.d.ts'
export class Long2BooleanLinkedOpenHashMap$ValueIterator extends Long2BooleanLinkedOpenHashMap$MapIterator<(param0: boolean) => void> implements BooleanListIterator {
    constructor(null_: { [key: string]: any })
    acceptOnIndex(arg0: (param0: boolean) => void, arg1: number): void;
    add(arg0: boolean): void;
    next(): boolean;
    nextBoolean(): boolean;
    previous(): boolean;
    previousBoolean(): boolean;
    remove(): void;
    set(arg0: boolean): void;
}