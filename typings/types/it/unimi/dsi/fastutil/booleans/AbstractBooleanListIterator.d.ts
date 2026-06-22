import type { AbstractBooleanBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/AbstractBooleanBidirectionalIterator.d.ts'
import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
export abstract class AbstractBooleanListIterator extends AbstractBooleanBidirectionalIterator implements BooleanListIterator {
    constructor()
    add(arg0: boolean): void;
    next(): boolean;
    nextBoolean(): boolean;
    previous(): boolean;
    previousBoolean(): boolean;
    remove(): void;
    set(arg0: boolean): void;
}