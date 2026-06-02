import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharAVLTreeMap$TreeIterator.d.ts'
import type { Short2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2CharAVLTreeMap$EntryIterator extends Short2CharAVLTreeMap$TreeIterator implements ObjectListIterator<Short2CharMap$Entry> {
    constructor(null_: Short2CharAVLTreeMap$EntryIterator)
    constructor(null_: Short2CharAVLTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    add(arg0: Short2CharMap$Entry): void;
    next(): Short2CharMap$Entry;
    previous(): Short2CharMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
    set(arg0: Short2CharMap$Entry): void;
}