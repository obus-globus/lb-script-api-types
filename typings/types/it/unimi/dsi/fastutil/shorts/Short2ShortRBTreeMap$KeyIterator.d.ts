import type { Short2ShortRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortRBTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Short2ShortRBTreeMap$KeyIterator extends Short2ShortRBTreeMap$TreeIterator implements ShortListIterator {
    constructor(null_: Short2ShortRBTreeMap$KeyIterator)
    constructor(null_: Short2ShortRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
}