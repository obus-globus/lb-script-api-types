import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortAVLTreeMap$TreeIterator.d.ts'
import type { Short2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ShortAVLTreeMap$EntryIterator extends Short2ShortAVLTreeMap$TreeIterator implements ObjectListIterator<Short2ShortMap$Entry> {
    constructor(null_: Short2ShortAVLTreeMap$EntryIterator)
    constructor(null_: Short2ShortAVLTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    add(arg0: Short2ShortMap$Entry): void;
    next(): Short2ShortMap$Entry;
    previous(): Short2ShortMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
    set(arg0: Short2ShortMap$Entry): void;
}