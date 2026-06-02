import type { AbstractCharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractCharIterator.d.ts'
import type { CharBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharBidirectionalIterator.d.ts'
export abstract class AbstractCharBidirectionalIterator extends AbstractCharIterator implements CharBidirectionalIterator {
    constructor()
    back(arg0: number): number;
    previous(): string;
    skip(arg0: number): number;
}