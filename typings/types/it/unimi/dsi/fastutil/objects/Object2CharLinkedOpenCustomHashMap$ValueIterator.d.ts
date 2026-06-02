import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Object2CharLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharLinkedOpenCustomHashMap$MapIterator.d.ts'
export class Object2CharLinkedOpenCustomHashMap$ValueIterator extends Object2CharLinkedOpenCustomHashMap$MapIterator<Object> implements CharListIterator {
    constructor(null_: Object2CharLinkedOpenCustomHashMap$ValueIterator)
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