import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceMap$Entry.d.ts'
import type { Short2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ReferenceRBTreeMap$EntryIterator extends Short2ReferenceRBTreeMap$TreeIterator implements ObjectListIterator<Short2ReferenceMap$Entry<V>> {
    constructor(null_: Short2ReferenceRBTreeMap$EntryIterator)
    constructor(null_: Short2ReferenceRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Short2ReferenceMap$Entry<V>;
    previous(): Short2ReferenceMap$Entry<V>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}