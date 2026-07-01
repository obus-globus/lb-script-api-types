import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { Long2ByteAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteAVLTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ByteAVLTreeMap$ValueIterator extends Long2ByteAVLTreeMap$TreeIterator implements ByteListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
}