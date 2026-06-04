import type { Short2ByteAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteAVLTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Short2ByteAVLTreeMap$KeyIterator extends Short2ByteAVLTreeMap$TreeIterator implements ShortListIterator {
    constructor(null_: Short2ByteAVLTreeMap$KeyIterator)
    constructor(null_: Short2ByteAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
}