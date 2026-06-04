import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { Double2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteRBTreeMap$TreeIterator.d.ts'
export class Double2ByteRBTreeMap$ValueIterator extends Double2ByteRBTreeMap$TreeIterator implements ByteListIterator {
    private constructor(null_: Double2ByteRBTreeMap$ValueIterator)
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
}