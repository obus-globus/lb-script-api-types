import type { Char2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { Char2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ObjectAVLTreeMap$EntryIterator extends Char2ObjectAVLTreeMap$TreeIterator implements ObjectListIterator<Char2ObjectMap$Entry<V>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    add<V extends unknown>(arg0: Char2ObjectMap$Entry<V>): void;
    next<V extends unknown>(): Char2ObjectMap$Entry<V>;
    previous<V extends unknown>(): Char2ObjectMap$Entry<V>;
    remove(): void;
    set<V extends unknown>(arg0: Char2ObjectMap$Entry<V>): void;
}