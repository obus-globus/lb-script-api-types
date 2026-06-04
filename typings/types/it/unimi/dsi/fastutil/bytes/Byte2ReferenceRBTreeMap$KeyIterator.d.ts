import type { Byte2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
export class Byte2ReferenceRBTreeMap$KeyIterator extends Byte2ReferenceRBTreeMap$TreeIterator implements ByteListIterator {
    constructor(null_: Byte2ReferenceRBTreeMap$KeyIterator)
    constructor(null_: Byte2ReferenceRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
}