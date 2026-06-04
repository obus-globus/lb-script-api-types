import type { Short2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntAVLTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Short2IntAVLTreeMap$KeyIterator extends Short2IntAVLTreeMap$TreeIterator implements ShortListIterator {
    constructor(null_: Short2IntAVLTreeMap$KeyIterator)
    constructor(null_: Short2IntAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
}