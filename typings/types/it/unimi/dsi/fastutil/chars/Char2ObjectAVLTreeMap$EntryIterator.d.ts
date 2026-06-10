import type { Char2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { Char2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ObjectAVLTreeMap$EntryIterator extends Char2ObjectAVLTreeMap$TreeIterator implements ObjectListIterator<Char2ObjectMap$Entry<V>> {
    constructor(null_: Char2ObjectAVLTreeMap$EntryIterator)
    constructor(null_: Char2ObjectAVLTreeMap$EntryIterator, arg1: string)
    add<V extends Object | number | string | boolean>(arg0: Char2ObjectMap$Entry<V>): void;
    next<V extends Object | number | string | boolean>(): Char2ObjectMap$Entry<V>;
    previous<V extends Object | number | string | boolean>(): Char2ObjectMap$Entry<V>;
    remove(): void;
    set<V extends Object | number | string | boolean>(arg0: Char2ObjectMap$Entry<V>): void;
}