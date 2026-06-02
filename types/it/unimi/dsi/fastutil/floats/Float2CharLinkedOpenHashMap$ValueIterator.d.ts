import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Float2CharLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharLinkedOpenHashMap$MapIterator.d.ts'
export class Float2CharLinkedOpenHashMap$ValueIterator extends Float2CharLinkedOpenHashMap$MapIterator<(param0: string) => void> implements CharListIterator {
    constructor(null_: Float2CharLinkedOpenHashMap$ValueIterator)
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