import type { Byte2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongRBTreeMap$TreeIterator.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
export class Byte2LongRBTreeMap$KeyIterator extends Byte2LongRBTreeMap$TreeIterator implements ByteListIterator {
    constructor(null_: Byte2LongRBTreeMap$KeyIterator)
    constructor(null_: Byte2LongRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
}