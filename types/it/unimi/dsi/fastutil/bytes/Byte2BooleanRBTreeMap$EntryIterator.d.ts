import type { Byte2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanMap$Entry.d.ts'
import type { Byte2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2BooleanRBTreeMap$EntryIterator extends Byte2BooleanRBTreeMap$TreeIterator implements ObjectListIterator<Byte2BooleanMap$Entry> {
    constructor(null_: Byte2BooleanRBTreeMap$EntryIterator)
    constructor(null_: Byte2BooleanRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Byte2BooleanMap$Entry;
    previous(): Byte2BooleanMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}