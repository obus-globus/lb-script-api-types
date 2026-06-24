import type { Double2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteMap$Entry.d.ts'
import type { Double2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Double2ByteRBTreeMap$EntryIterator extends Double2ByteRBTreeMap$TreeIterator implements ObjectListIterator<Double2ByteMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Double2ByteMap$Entry): void;
    next(): Double2ByteMap$Entry;
    previous(): Double2ByteMap$Entry;
    remove(): void;
    set(arg0: Double2ByteMap$Entry): void;
}