import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Byte2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanRBTreeMap$TreeIterator.d.ts'
export class Byte2BooleanRBTreeMap$ValueIterator extends Byte2BooleanRBTreeMap$TreeIterator implements BooleanListIterator {
    private constructor(null_: Byte2BooleanRBTreeMap$ValueIterator)
    add(arg0: boolean): void;
    next(): boolean;
    nextBoolean(): boolean;
    previous(): boolean;
    previousBoolean(): boolean;
    remove(): void;
    set(arg0: boolean): void;
}