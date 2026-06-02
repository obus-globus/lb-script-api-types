import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntAVLTreeMap$TreeIterator.d.ts'
import type { Short2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2IntAVLTreeMap$EntryIterator extends Short2IntAVLTreeMap$TreeIterator implements ObjectListIterator<Short2IntMap$Entry> {
    constructor(null_: Short2IntAVLTreeMap$EntryIterator)
    constructor(null_: Short2IntAVLTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    add(arg0: Short2IntMap$Entry): void;
    next(): Short2IntMap$Entry;
    previous(): Short2IntMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
    set(arg0: Short2IntMap$Entry): void;
}