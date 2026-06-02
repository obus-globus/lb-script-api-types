import type { Short2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Short2ObjectAVLTreeMap$KeyIterator extends Short2ObjectAVLTreeMap$TreeIterator implements ShortListIterator {
    constructor(null_: Short2ObjectAVLTreeMap$KeyIterator)
    constructor(null_: Short2ObjectAVLTreeMap$KeyIterator, arg1: number)
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