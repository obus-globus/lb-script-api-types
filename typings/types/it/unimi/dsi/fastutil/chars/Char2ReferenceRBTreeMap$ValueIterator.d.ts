import type { Char2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceRBTreeMap$ValueIterator extends Char2ReferenceRBTreeMap$TreeIterator implements ObjectListIterator<V> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add<V extends unknown>(arg0: V): void;
    next<V extends unknown>(): V;
    previous<V extends unknown>(): V;
    remove(): void;
    set<V extends unknown>(arg0: V): void;
}