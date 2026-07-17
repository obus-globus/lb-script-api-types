import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharAVLTreeMap$TreeIterator.d.ts'
import type { Short2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharMap$Entry.d.ts'
export class Short2CharAVLTreeMap$EntryIterator extends Short2CharAVLTreeMap$TreeIterator implements ObjectListIterator<Short2CharMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Short2CharMap$Entry): void;
    next(): Short2CharMap$Entry;
    previous(): Short2CharMap$Entry;
    remove(): void;
    set(arg0: Short2CharMap$Entry): void;
}