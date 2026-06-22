import type { AbstractCharBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractCharBidirectionalIterator.d.ts'
import type { CharBigListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharBigListIterator.d.ts'
export abstract class AbstractCharBigListIterator extends AbstractCharBidirectionalIterator implements CharBigListIterator {
    constructor()
    add(arg0: string): void;
    back(arg0: number): number;
    nextChar(): string;
    previousChar(): string;
    set(arg0: string): void;
    skip(arg0: number): number;
}