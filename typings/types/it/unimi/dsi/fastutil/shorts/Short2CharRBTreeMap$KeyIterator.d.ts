import type { Short2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharRBTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Short2CharRBTreeMap$KeyIterator extends Short2CharRBTreeMap$TreeIterator implements ShortListIterator {
    constructor(null_: Short2CharRBTreeMap$KeyIterator)
    constructor(null_: Short2CharRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
}