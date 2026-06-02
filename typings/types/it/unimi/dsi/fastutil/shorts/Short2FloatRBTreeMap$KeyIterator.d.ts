import type { Short2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatRBTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Short2FloatRBTreeMap$KeyIterator extends Short2FloatRBTreeMap$TreeIterator implements ShortListIterator {
    constructor(null_: Short2FloatRBTreeMap$KeyIterator)
    constructor(null_: Short2FloatRBTreeMap$KeyIterator, arg1: number)
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