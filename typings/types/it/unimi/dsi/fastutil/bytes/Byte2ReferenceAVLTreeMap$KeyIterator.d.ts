import type { Byte2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
export class Byte2ReferenceAVLTreeMap$KeyIterator extends Byte2ReferenceAVLTreeMap$TreeIterator implements ByteListIterator {
    constructor(null_: Byte2ReferenceAVLTreeMap$KeyIterator)
    constructor(null_: Byte2ReferenceAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
}