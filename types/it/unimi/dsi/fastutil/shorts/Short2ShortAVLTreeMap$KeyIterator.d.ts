import type { Short2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortAVLTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Short2ShortAVLTreeMap$KeyIterator extends Short2ShortAVLTreeMap$TreeIterator implements ShortListIterator {
    constructor(null_: Short2ShortAVLTreeMap$KeyIterator)
    constructor(null_: Short2ShortAVLTreeMap$KeyIterator, arg1: number)
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