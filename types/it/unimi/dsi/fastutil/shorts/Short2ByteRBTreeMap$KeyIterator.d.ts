import type { Short2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteRBTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Short2ByteRBTreeMap$KeyIterator extends Short2ByteRBTreeMap$TreeIterator implements ShortListIterator {
    constructor(null_: Short2ByteRBTreeMap$KeyIterator)
    constructor(null_: Short2ByteRBTreeMap$KeyIterator, arg1: number)
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