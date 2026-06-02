import type { Double2ByteAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteAVLTreeMap$TreeIterator.d.ts'
import type { Double2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ByteAVLTreeMap$EntryIterator extends Double2ByteAVLTreeMap$TreeIterator implements ObjectListIterator<Double2ByteMap$Entry> {
    constructor(null_: Double2ByteAVLTreeMap$EntryIterator)
    constructor(null_: Double2ByteAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Double2ByteMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Double2ByteMap$Entry;
    previous(): Double2ByteMap$Entry;
    remove(): void;
    set(arg0: Double2ByteMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}