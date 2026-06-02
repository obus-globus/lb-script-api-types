import type { Byte2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntRBTreeMap$TreeIterator.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
export class Byte2IntRBTreeMap$KeyIterator extends Byte2IntRBTreeMap$TreeIterator implements ByteListIterator {
    constructor(null_: Byte2IntRBTreeMap$KeyIterator)
    constructor(null_: Byte2IntRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}