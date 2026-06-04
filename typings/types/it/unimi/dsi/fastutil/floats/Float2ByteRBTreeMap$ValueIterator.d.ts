import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { Float2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteRBTreeMap$TreeIterator.d.ts'
export class Float2ByteRBTreeMap$ValueIterator extends Float2ByteRBTreeMap$TreeIterator implements ByteListIterator {
    private constructor(null_: Float2ByteRBTreeMap$ValueIterator)
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
}