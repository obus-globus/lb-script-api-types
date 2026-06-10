import type { Byte2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntAVLTreeMap$TreeIterator.d.ts'
import type { Byte2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Byte2IntAVLTreeMap$EntryIterator extends Byte2IntAVLTreeMap$TreeIterator implements ObjectListIterator<Byte2IntMap$Entry> {
    constructor(null_: Byte2IntAVLTreeMap$EntryIterator)
    constructor(null_: Byte2IntAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Byte2IntMap$Entry): void;
    next(): Byte2IntMap$Entry;
    previous(): Byte2IntMap$Entry;
    remove(): void;
    set(arg0: Byte2IntMap$Entry): void;
}