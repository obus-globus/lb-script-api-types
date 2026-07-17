import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceMap$Entry.d.ts'
import type { Char2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceRBTreeMap$EntryIterator extends Char2ReferenceRBTreeMap$TreeIterator implements ObjectListIterator<Char2ReferenceMap$Entry<V>> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: string)
    add<V extends unknown>(arg0: Char2ReferenceMap$Entry<V>): void;
    next<V extends unknown>(): Char2ReferenceMap$Entry<V>;
    previous<V extends unknown>(): Char2ReferenceMap$Entry<V>;
    remove(): void;
    set<V extends unknown>(arg0: Char2ReferenceMap$Entry<V>): void;
}