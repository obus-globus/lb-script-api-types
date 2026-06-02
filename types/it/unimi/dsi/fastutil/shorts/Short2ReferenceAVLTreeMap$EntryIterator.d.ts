import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { Short2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ReferenceAVLTreeMap$EntryIterator extends Short2ReferenceAVLTreeMap$TreeIterator implements ObjectListIterator<Short2ReferenceMap$Entry<V>> {
    constructor(null_: Short2ReferenceAVLTreeMap$EntryIterator)
    constructor(null_: Short2ReferenceAVLTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    add(arg0: Short2ReferenceMap$Entry<V>): void;
    next(): Short2ReferenceMap$Entry<V>;
    previous(): Short2ReferenceMap$Entry<V>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
    set(arg0: Short2ReferenceMap$Entry<V>): void;
}