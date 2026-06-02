import type { Byte2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanAVLTreeMap$TreeIterator.d.ts'
import type { Byte2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2BooleanAVLTreeMap$EntryIterator extends Byte2BooleanAVLTreeMap$TreeIterator implements ObjectListIterator<Byte2BooleanMap$Entry> {
    constructor(null_: Byte2BooleanAVLTreeMap$EntryIterator)
    constructor(null_: Byte2BooleanAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Byte2BooleanMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Byte2BooleanMap$Entry;
    previous(): Byte2BooleanMap$Entry;
    remove(): void;
    set(arg0: Byte2BooleanMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}