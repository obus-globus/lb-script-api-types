import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Reference2CharLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharLinkedOpenHashMap$MapIterator.d.ts'
export class Reference2CharLinkedOpenHashMap$ValueIterator extends Reference2CharLinkedOpenHashMap$MapIterator<Object> implements CharListIterator {
    constructor(null_: { [key: string]: any })
    acceptOnIndex(arg0: (param0: string) => void, arg1: number): void;
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}