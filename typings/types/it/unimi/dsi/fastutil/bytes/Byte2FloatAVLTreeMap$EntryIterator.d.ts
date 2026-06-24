import type { Byte2FloatAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatAVLTreeMap$TreeIterator.d.ts'
import type { Byte2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Byte2FloatAVLTreeMap$EntryIterator extends Byte2FloatAVLTreeMap$TreeIterator implements ObjectListIterator<Byte2FloatMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Byte2FloatMap$Entry): void;
    next(): Byte2FloatMap$Entry;
    previous(): Byte2FloatMap$Entry;
    remove(): void;
    set(arg0: Byte2FloatMap$Entry): void;
}