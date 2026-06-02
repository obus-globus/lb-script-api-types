import type { Char2ShortLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortLinkedOpenHashMap$MapIterator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2ShortLinkedOpenHashMap$KeyIterator extends Char2ShortLinkedOpenHashMap$MapIterator<(param0: string) => void> implements CharListIterator {
    constructor(null_: Char2ShortLinkedOpenHashMap$KeyIterator)
    constructor(null_: Char2ShortLinkedOpenHashMap$KeyIterator, arg1: string)
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