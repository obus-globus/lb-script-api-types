import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Long2CharLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharLinkedOpenHashMap$MapIterator.d.ts'
export class Long2CharLinkedOpenHashMap$ValueIterator extends Long2CharLinkedOpenHashMap$MapIterator<(param0: string) => void> implements CharListIterator {
    constructor(null_: Long2CharLinkedOpenHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: string) => void, arg1: number): void;
    add(arg0: string): void;
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
    set(arg0: string): void;
}