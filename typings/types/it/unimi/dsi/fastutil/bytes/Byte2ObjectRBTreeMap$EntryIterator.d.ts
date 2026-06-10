import type { Byte2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectMap$Entry.d.ts'
import type { Byte2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ObjectRBTreeMap$EntryIterator extends Byte2ObjectRBTreeMap$TreeIterator implements ObjectListIterator<Byte2ObjectMap$Entry<V>> {
    constructor(null_: Byte2ObjectRBTreeMap$EntryIterator)
    constructor(null_: Byte2ObjectRBTreeMap$EntryIterator, arg1: number)
    add<V extends Object | number | string | boolean>(arg0: Byte2ObjectMap$Entry<V>): void;
    next<V extends Object | number | string | boolean>(): Byte2ObjectMap$Entry<V>;
    previous<V extends Object | number | string | boolean>(): Byte2ObjectMap$Entry<V>;
    remove(): void;
    set<V extends Object | number | string | boolean>(arg0: Byte2ObjectMap$Entry<V>): void;
}