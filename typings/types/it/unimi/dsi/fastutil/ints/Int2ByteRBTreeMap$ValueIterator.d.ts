import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { Int2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteRBTreeMap$TreeIterator.d.ts'
export class Int2ByteRBTreeMap$ValueIterator extends Int2ByteRBTreeMap$TreeIterator implements ByteListIterator {
    private constructor(null_: { [key: string]: any })
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
}