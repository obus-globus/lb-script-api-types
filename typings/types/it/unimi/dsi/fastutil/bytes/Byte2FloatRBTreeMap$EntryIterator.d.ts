import type { Byte2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatMap$Entry.d.ts'
import type { Byte2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Byte2FloatRBTreeMap$EntryIterator extends Byte2FloatRBTreeMap$TreeIterator implements ObjectListIterator<Byte2FloatMap$Entry> {
    constructor(null_: Byte2FloatRBTreeMap$EntryIterator)
    constructor(null_: Byte2FloatRBTreeMap$EntryIterator, arg1: number)
    add(arg0: Byte2FloatMap$Entry): void;
    next(): Byte2FloatMap$Entry;
    previous(): Byte2FloatMap$Entry;
    remove(): void;
    set(arg0: Byte2FloatMap$Entry): void;
}