import type { Byte2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceMap$Entry.d.ts'
import type { Byte2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ReferenceRBTreeMap$EntryIterator extends Byte2ReferenceRBTreeMap$TreeIterator implements ObjectListIterator<Byte2ReferenceMap$Entry<V>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add<V extends unknown>(arg0: Byte2ReferenceMap$Entry<V>): void;
    next<V extends unknown>(): Byte2ReferenceMap$Entry<V>;
    previous<V extends unknown>(): Byte2ReferenceMap$Entry<V>;
    remove(): void;
    set<V extends unknown>(arg0: Byte2ReferenceMap$Entry<V>): void;
}