import type { Byte2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanRBTreeMap$TreeIterator.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
export class Byte2BooleanRBTreeMap$KeyIterator extends Byte2BooleanRBTreeMap$TreeIterator implements ByteListIterator {
    constructor(null_: Byte2BooleanRBTreeMap$KeyIterator)
    constructor(null_: Byte2BooleanRBTreeMap$KeyIterator, arg1: number)
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