import type { Long2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ObjectAVLTreeMap$ValueIterator extends Long2ObjectAVLTreeMap$TreeIterator implements ObjectListIterator<V> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add<V extends unknown>(arg0: V): void;
    next<V extends unknown>(): V;
    previous<V extends unknown>(): V;
    remove(): void;
    set<V extends unknown>(arg0: V): void;
}