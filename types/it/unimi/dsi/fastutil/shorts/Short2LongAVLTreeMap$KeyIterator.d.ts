import type { Short2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongAVLTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Short2LongAVLTreeMap$KeyIterator extends Short2LongAVLTreeMap$TreeIterator implements ShortListIterator {
    constructor(null_: Short2LongAVLTreeMap$KeyIterator)
    constructor(null_: Short2LongAVLTreeMap$KeyIterator, arg1: number)
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