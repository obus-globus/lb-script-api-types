import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { Char2ByteAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteAVLTreeMap$TreeIterator.d.ts'
export class Char2ByteAVLTreeMap$ValueIterator extends Char2ByteAVLTreeMap$TreeIterator implements ByteListIterator {
    private constructor(null_: Char2ByteAVLTreeMap$ValueIterator)
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