import type { Byte2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteRBTreeMap$TreeIterator.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
export class Byte2ByteRBTreeMap$ValueIterator extends Byte2ByteRBTreeMap$TreeIterator implements ByteListIterator {
    private constructor(null_: Byte2ByteRBTreeMap$ValueIterator)
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
}