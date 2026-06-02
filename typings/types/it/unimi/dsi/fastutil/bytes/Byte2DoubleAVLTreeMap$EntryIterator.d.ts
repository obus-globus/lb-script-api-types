import type { Byte2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleAVLTreeMap$TreeIterator.d.ts'
import type { Byte2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2DoubleAVLTreeMap$EntryIterator extends Byte2DoubleAVLTreeMap$TreeIterator implements ObjectListIterator<Byte2DoubleMap$Entry> {
    constructor(null_: Byte2DoubleAVLTreeMap$EntryIterator)
    constructor(null_: Byte2DoubleAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Byte2DoubleMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Byte2DoubleMap$Entry;
    previous(): Byte2DoubleMap$Entry;
    remove(): void;
    set(arg0: Byte2DoubleMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}