import type { AbstractFloatBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloatBidirectionalIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export abstract class AbstractFloatListIterator extends AbstractFloatBidirectionalIterator implements FloatListIterator {
    constructor()
    add(arg0: number): void;
    next(): number;
    previous(): number;
    remove(): void;
    set(arg0: number): void;
}