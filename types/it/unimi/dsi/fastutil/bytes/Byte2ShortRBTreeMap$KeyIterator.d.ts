import type { Byte2ShortRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortRBTreeMap$TreeIterator.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
export class Byte2ShortRBTreeMap$KeyIterator extends Byte2ShortRBTreeMap$TreeIterator implements ByteListIterator {
    constructor(null_: Byte2ShortRBTreeMap$KeyIterator)
    constructor(null_: Byte2ShortRBTreeMap$KeyIterator, arg1: number)
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