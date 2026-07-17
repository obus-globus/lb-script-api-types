import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortMap$Entry.d.ts'
import type { Byte2ShortRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Byte2ShortRBTreeMap$EntryIterator extends Byte2ShortRBTreeMap$TreeIterator implements ObjectListIterator<Byte2ShortMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Byte2ShortMap$Entry): void;
    next(): Byte2ShortMap$Entry;
    previous(): Byte2ShortMap$Entry;
    remove(): void;
    set(arg0: Byte2ShortMap$Entry): void;
}