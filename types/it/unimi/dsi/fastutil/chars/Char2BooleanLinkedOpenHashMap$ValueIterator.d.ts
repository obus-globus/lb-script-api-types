import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Char2BooleanLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanLinkedOpenHashMap$MapIterator.d.ts'
export class Char2BooleanLinkedOpenHashMap$ValueIterator extends Char2BooleanLinkedOpenHashMap$MapIterator<(param0: boolean) => void> implements BooleanListIterator {
    constructor(null_: Char2BooleanLinkedOpenHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: boolean) => void, arg1: number): void;
    add(arg0: boolean): void;
    add(arg0: boolean): void;
    next(): boolean;
    nextBoolean(): boolean;
    previous(): boolean;
    previousBoolean(): boolean;
    remove(): void;
    set(arg0: boolean): void;
    set(arg0: boolean): void;
}