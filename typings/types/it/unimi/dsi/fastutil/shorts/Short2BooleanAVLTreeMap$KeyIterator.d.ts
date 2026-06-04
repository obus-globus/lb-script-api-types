import type { Short2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanAVLTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Short2BooleanAVLTreeMap$KeyIterator extends Short2BooleanAVLTreeMap$TreeIterator implements ShortListIterator {
    constructor(null_: Short2BooleanAVLTreeMap$KeyIterator)
    constructor(null_: Short2BooleanAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
}