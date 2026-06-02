import type { Byte2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanAVLTreeMap$TreeIterator.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
export class Byte2BooleanAVLTreeMap$KeyIterator extends Byte2BooleanAVLTreeMap$TreeIterator implements ByteListIterator {
    constructor(null_: Byte2BooleanAVLTreeMap$KeyIterator)
    constructor(null_: Byte2BooleanAVLTreeMap$KeyIterator, arg1: number)
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