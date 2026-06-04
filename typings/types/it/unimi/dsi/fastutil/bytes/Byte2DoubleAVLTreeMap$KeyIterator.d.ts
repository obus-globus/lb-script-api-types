import type { Byte2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleAVLTreeMap$TreeIterator.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
export class Byte2DoubleAVLTreeMap$KeyIterator extends Byte2DoubleAVLTreeMap$TreeIterator implements ByteListIterator {
    constructor(null_: Byte2DoubleAVLTreeMap$KeyIterator)
    constructor(null_: Byte2DoubleAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
}