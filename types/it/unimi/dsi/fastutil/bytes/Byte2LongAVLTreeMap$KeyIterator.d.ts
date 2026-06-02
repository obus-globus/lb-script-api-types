import type { Byte2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongAVLTreeMap$TreeIterator.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
export class Byte2LongAVLTreeMap$KeyIterator extends Byte2LongAVLTreeMap$TreeIterator implements ByteListIterator {
    constructor(null_: Byte2LongAVLTreeMap$KeyIterator)
    constructor(null_: Byte2LongAVLTreeMap$KeyIterator, arg1: number)
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