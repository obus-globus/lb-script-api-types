import type { AbstractCharBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractCharBidirectionalIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export abstract class AbstractCharListIterator extends AbstractCharBidirectionalIterator implements CharListIterator {
    constructor()
    add(arg0: string): void;
    add(arg0: string): void;
    next(): string;
    previous(): string;
    remove(): void;
    set(arg0: string): void;
    set(arg0: string): void;
}