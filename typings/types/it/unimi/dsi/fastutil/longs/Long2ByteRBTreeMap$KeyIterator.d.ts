import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Long2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteRBTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Long2ByteRBTreeMap$KeyIterator extends Long2ByteRBTreeMap$TreeIterator implements LongListIterator {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
}