import type { Byte2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
export class Byte2ObjectAVLTreeMap$KeyIterator extends Byte2ObjectAVLTreeMap$TreeIterator implements ByteListIterator {
    constructor(null_: Byte2ObjectAVLTreeMap$KeyIterator)
    constructor(null_: Byte2ObjectAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
}