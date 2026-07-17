import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceMap$Entry.d.ts'
import type { Int2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ReferenceRBTreeMap$EntryIterator extends Int2ReferenceRBTreeMap$TreeIterator implements ObjectListIterator<Int2ReferenceMap$Entry<V>> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add<V extends unknown>(arg0: Int2ReferenceMap$Entry<V>): void;
    next<V extends unknown>(): Int2ReferenceMap$Entry<V>;
    previous<V extends unknown>(): Int2ReferenceMap$Entry<V>;
    remove(): void;
    set<V extends unknown>(arg0: Int2ReferenceMap$Entry<V>): void;
}