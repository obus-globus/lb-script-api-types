import type { Byte2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharMap$Entry.d.ts'
import type { Byte2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Byte2CharRBTreeMap$EntryIterator extends Byte2CharRBTreeMap$TreeIterator implements ObjectListIterator<Byte2CharMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Byte2CharMap$Entry): void;
    next(): Byte2CharMap$Entry;
    previous(): Byte2CharMap$Entry;
    remove(): void;
    set(arg0: Byte2CharMap$Entry): void;
}