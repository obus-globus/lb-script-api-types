import type { Byte2ByteAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteAVLTreeMap$TreeIterator.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
export class Byte2ByteAVLTreeMap$KeyIterator extends Byte2ByteAVLTreeMap$TreeIterator implements ByteListIterator {
    constructor(null_: Byte2ByteAVLTreeMap$KeyIterator)
    constructor(null_: Byte2ByteAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
}