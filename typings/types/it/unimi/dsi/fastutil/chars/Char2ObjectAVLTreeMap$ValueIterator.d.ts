import type { Char2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ObjectAVLTreeMap$ValueIterator extends Char2ObjectAVLTreeMap$TreeIterator implements ObjectListIterator<V> {
    private constructor(null_: Char2ObjectAVLTreeMap$ValueIterator)
    add<V extends unknown>(arg0: V): void;
    next<V extends unknown>(): V;
    previous<V extends unknown>(): V;
    remove(): void;
    set<V extends unknown>(arg0: V): void;
}