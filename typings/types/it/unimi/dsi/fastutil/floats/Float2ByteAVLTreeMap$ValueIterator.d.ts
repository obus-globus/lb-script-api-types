import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { Float2ByteAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteAVLTreeMap$TreeIterator.d.ts'
export class Float2ByteAVLTreeMap$ValueIterator extends Float2ByteAVLTreeMap$TreeIterator implements ByteListIterator {
    private constructor(null_: Float2ByteAVLTreeMap$ValueIterator)
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
}