import type { Byte2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatRBTreeMap$TreeIterator.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
export class Byte2FloatRBTreeMap$KeyIterator extends Byte2FloatRBTreeMap$TreeIterator implements ByteListIterator {
    constructor(null_: Byte2FloatRBTreeMap$KeyIterator)
    constructor(null_: Byte2FloatRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
}