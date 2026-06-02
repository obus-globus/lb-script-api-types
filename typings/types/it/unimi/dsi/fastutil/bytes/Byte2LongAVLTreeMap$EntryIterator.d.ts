import type { Byte2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongAVLTreeMap$TreeIterator.d.ts'
import type { Byte2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2LongAVLTreeMap$EntryIterator extends Byte2LongAVLTreeMap$TreeIterator implements ObjectListIterator<Byte2LongMap$Entry> {
    constructor(null_: Byte2LongAVLTreeMap$EntryIterator)
    constructor(null_: Byte2LongAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Byte2LongMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Byte2LongMap$Entry;
    previous(): Byte2LongMap$Entry;
    remove(): void;
    set(arg0: Byte2LongMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}