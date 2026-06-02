import type { Char2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceAVLTreeMap$ValueIterator extends Char2ReferenceAVLTreeMap$TreeIterator implements ObjectListIterator<V> {
    private constructor(null_: Char2ReferenceAVLTreeMap$ValueIterator)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next<V extends Object | number | string | boolean>(): V;
    previous<V extends Object | number | string | boolean>(): V;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}