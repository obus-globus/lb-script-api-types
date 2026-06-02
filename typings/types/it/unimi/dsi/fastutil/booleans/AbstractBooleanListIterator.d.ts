import type { AbstractBooleanBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/AbstractBooleanBidirectionalIterator.d.ts'
import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
export abstract class AbstractBooleanListIterator extends AbstractBooleanBidirectionalIterator implements BooleanListIterator {
    constructor()
    add(arg0: boolean): void;
    add(arg0: boolean): void;
    next(): boolean;
    previous(): boolean;
    remove(): void;
    set(arg0: boolean): void;
    set(arg0: boolean): void;
}