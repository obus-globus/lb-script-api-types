import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntMap$Entry.d.ts'
import type { Byte2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Byte2IntRBTreeMap$EntryIterator extends Byte2IntRBTreeMap$TreeIterator implements ObjectListIterator<Byte2IntMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Byte2IntMap$Entry): void;
    next(): Byte2IntMap$Entry;
    previous(): Byte2IntMap$Entry;
    remove(): void;
    set(arg0: Byte2IntMap$Entry): void;
}