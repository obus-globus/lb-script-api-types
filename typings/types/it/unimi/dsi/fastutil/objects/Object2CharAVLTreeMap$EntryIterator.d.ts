import type { Object2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharAVLTreeMap$TreeIterator.d.ts'
import type { Object2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharAVLTreeMap$EntryIterator extends Object2CharAVLTreeMap$TreeIterator implements ObjectListIterator<Object2CharMap$Entry<K>> {
    constructor(null_: Object2CharAVLTreeMap$EntryIterator)
    constructor(null_: Object2CharAVLTreeMap$EntryIterator)
    add(arg0: Object2CharMap$Entry<K>): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2CharMap$Entry<K>;
    previous(): Object2CharMap$Entry<K>;
    remove(): void;
    set(arg0: Object2CharMap$Entry<K>): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}