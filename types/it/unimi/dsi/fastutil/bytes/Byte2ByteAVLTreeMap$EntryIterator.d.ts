import type { Byte2ByteAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteAVLTreeMap$TreeIterator.d.ts'
import type { Byte2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ByteAVLTreeMap$EntryIterator extends Byte2ByteAVLTreeMap$TreeIterator implements ObjectListIterator<Byte2ByteMap$Entry> {
    constructor(null_: Byte2ByteAVLTreeMap$EntryIterator)
    constructor(null_: Byte2ByteAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Byte2ByteMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Byte2ByteMap$Entry;
    previous(): Byte2ByteMap$Entry;
    remove(): void;
    set(arg0: Byte2ByteMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}