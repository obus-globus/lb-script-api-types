import type { Object2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleAVLTreeMap$TreeIterator.d.ts'
import type { Object2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2DoubleAVLTreeMap$EntryIterator extends Object2DoubleAVLTreeMap$TreeIterator implements ObjectListIterator<Object2DoubleMap$Entry<K>> {
    constructor(null_: Object2DoubleAVLTreeMap$EntryIterator)
    constructor(null_: Object2DoubleAVLTreeMap$EntryIterator)
    add<K extends Object | number | string | boolean>(arg0: Object2DoubleMap$Entry<K>): void;
    next<K extends Object | number | string | boolean>(): Object2DoubleMap$Entry<K>;
    previous<K extends Object | number | string | boolean>(): Object2DoubleMap$Entry<K>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: Object2DoubleMap$Entry<K>): void;
}