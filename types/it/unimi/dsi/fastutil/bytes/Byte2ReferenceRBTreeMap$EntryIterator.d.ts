import type { Byte2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceMap$Entry.d.ts'
import type { Byte2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ReferenceRBTreeMap$EntryIterator extends Byte2ReferenceRBTreeMap$TreeIterator implements ObjectListIterator<Byte2ReferenceMap$Entry<V>> {
    constructor(null_: Byte2ReferenceRBTreeMap$EntryIterator)
    constructor(null_: Byte2ReferenceRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Byte2ReferenceMap$Entry<V>;
    previous(): Byte2ReferenceMap$Entry<V>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}