import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharAVLTreeMap$TreeIterator.d.ts'
import type { Byte2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Byte2CharAVLTreeMap$EntryIterator extends Byte2CharAVLTreeMap$TreeIterator implements ObjectListIterator<Byte2CharMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Byte2CharMap$Entry): void;
    next(): Byte2CharMap$Entry;
    previous(): Byte2CharMap$Entry;
    remove(): void;
    set(arg0: Byte2CharMap$Entry): void;
}