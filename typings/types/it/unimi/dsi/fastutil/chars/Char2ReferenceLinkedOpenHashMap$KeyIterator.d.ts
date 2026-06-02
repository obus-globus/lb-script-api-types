import type { Char2ReferenceLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceLinkedOpenHashMap$MapIterator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2ReferenceLinkedOpenHashMap$KeyIterator extends Char2ReferenceLinkedOpenHashMap$MapIterator<Object> implements CharListIterator {
    constructor(null_: Char2ReferenceLinkedOpenHashMap$KeyIterator)
    constructor(null_: Char2ReferenceLinkedOpenHashMap$KeyIterator, arg1: string)
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