import type { Short2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanRBTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Short2BooleanRBTreeMap$KeyIterator extends Short2BooleanRBTreeMap$TreeIterator implements ShortListIterator {
    constructor(null_: Short2BooleanRBTreeMap$KeyIterator)
    constructor(null_: Short2BooleanRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    add(arg0: number): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}