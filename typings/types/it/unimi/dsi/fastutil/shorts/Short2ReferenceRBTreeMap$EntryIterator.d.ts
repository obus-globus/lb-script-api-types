import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceMap$Entry.d.ts'
import type { Short2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ReferenceRBTreeMap$EntryIterator extends Short2ReferenceRBTreeMap$TreeIterator implements ObjectListIterator<Short2ReferenceMap$Entry<V>> {
    constructor(null_: Short2ReferenceRBTreeMap$EntryIterator)
    constructor(null_: Short2ReferenceRBTreeMap$EntryIterator, arg1: number)
    add<V extends unknown>(arg0: Short2ReferenceMap$Entry<V>): void;
    next<V extends unknown>(): Short2ReferenceMap$Entry<V>;
    previous<V extends unknown>(): Short2ReferenceMap$Entry<V>;
    remove(): void;
    set<V extends unknown>(arg0: Short2ReferenceMap$Entry<V>): void;
}