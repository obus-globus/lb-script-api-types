import type { Byte2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteRBTreeMap$TreeIterator.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
export class Byte2ByteRBTreeMap$KeyIterator extends Byte2ByteRBTreeMap$TreeIterator implements ByteListIterator {
    constructor(null_: Byte2ByteRBTreeMap$KeyIterator)
    constructor(null_: Byte2ByteRBTreeMap$KeyIterator, arg1: number)
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