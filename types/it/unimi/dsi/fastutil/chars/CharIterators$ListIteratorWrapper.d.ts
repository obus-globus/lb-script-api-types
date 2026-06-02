import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
export class CharIterators$ListIteratorWrapper extends Object implements CharListIterator {
    constructor(arg0: ListIterator<string>)
    // private i: ListIterator<string>;
    add(arg0: string): void;
    add(arg0: string): void;
    add(arg0: string): void;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: string) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): string;
    nextChar(): string;
    nextIndex(): number;
    previous(): string;
    previousChar(): string;
    previousIndex(): number;
    remove(): void;
    remove(): void;
    set(arg0: string): void;
    set(arg0: string): void;
    set(arg0: string): void;
}