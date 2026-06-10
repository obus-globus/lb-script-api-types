import type { Object2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortAVLTreeMap$TreeIterator.d.ts'
import type { Object2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ShortAVLTreeMap$EntryIterator extends Object2ShortAVLTreeMap$TreeIterator implements ObjectListIterator<Object2ShortMap$Entry<K>> {
    constructor(null_: Object2ShortAVLTreeMap$EntryIterator)
    constructor(null_: Object2ShortAVLTreeMap$EntryIterator)
    add<K extends Object | number | string | boolean>(arg0: Object2ShortMap$Entry<K>): void;
    next<K extends Object | number | string | boolean>(): Object2ShortMap$Entry<K>;
    previous<K extends Object | number | string | boolean>(): Object2ShortMap$Entry<K>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: Object2ShortMap$Entry<K>): void;
}