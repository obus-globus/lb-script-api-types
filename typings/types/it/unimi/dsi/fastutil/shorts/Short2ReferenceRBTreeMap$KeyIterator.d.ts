import type { Short2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Short2ReferenceRBTreeMap$KeyIterator extends Short2ReferenceRBTreeMap$TreeIterator implements ShortListIterator {
    constructor(null_: Short2ReferenceRBTreeMap$KeyIterator)
    constructor(null_: Short2ReferenceRBTreeMap$KeyIterator, arg1: number)
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