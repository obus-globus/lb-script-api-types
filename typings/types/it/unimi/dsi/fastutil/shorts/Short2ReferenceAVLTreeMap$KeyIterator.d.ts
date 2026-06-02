import type { Short2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Short2ReferenceAVLTreeMap$KeyIterator extends Short2ReferenceAVLTreeMap$TreeIterator implements ShortListIterator {
    constructor(null_: Short2ReferenceAVLTreeMap$KeyIterator)
    constructor(null_: Short2ReferenceAVLTreeMap$KeyIterator, arg1: number)
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