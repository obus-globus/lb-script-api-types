import type { Byte2ShortRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortRBTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Byte2ShortRBTreeMap$ValueIterator extends Byte2ShortRBTreeMap$TreeIterator implements ShortListIterator {
    private constructor(null_: Byte2ShortRBTreeMap$ValueIterator)
    add(arg0: number): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
}