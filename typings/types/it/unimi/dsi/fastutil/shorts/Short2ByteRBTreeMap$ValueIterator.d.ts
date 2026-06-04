import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { Short2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteRBTreeMap$TreeIterator.d.ts'
export class Short2ByteRBTreeMap$ValueIterator extends Short2ByteRBTreeMap$TreeIterator implements ByteListIterator {
    private constructor(null_: Short2ByteRBTreeMap$ValueIterator)
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
}