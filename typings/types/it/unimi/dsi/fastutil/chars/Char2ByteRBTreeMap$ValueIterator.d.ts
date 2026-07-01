import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { Char2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ByteRBTreeMap$ValueIterator extends Char2ByteRBTreeMap$TreeIterator implements ByteListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
}