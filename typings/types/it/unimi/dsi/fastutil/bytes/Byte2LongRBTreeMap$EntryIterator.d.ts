import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongMap$Entry.d.ts'
import type { Byte2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Byte2LongRBTreeMap$EntryIterator extends Byte2LongRBTreeMap$TreeIterator implements ObjectListIterator<Byte2LongMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Byte2LongMap$Entry): void;
    next(): Byte2LongMap$Entry;
    previous(): Byte2LongMap$Entry;
    remove(): void;
    set(arg0: Byte2LongMap$Entry): void;
}