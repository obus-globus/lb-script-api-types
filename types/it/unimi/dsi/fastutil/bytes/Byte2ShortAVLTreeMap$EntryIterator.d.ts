import type { Byte2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortAVLTreeMap$TreeIterator.d.ts'
import type { Byte2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ShortAVLTreeMap$EntryIterator extends Byte2ShortAVLTreeMap$TreeIterator implements ObjectListIterator<Byte2ShortMap$Entry> {
    constructor(null_: Byte2ShortAVLTreeMap$EntryIterator)
    constructor(null_: Byte2ShortAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Byte2ShortMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Byte2ShortMap$Entry;
    previous(): Byte2ShortMap$Entry;
    remove(): void;
    set(arg0: Byte2ShortMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}