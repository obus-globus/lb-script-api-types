import type { Byte2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { Byte2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ObjectAVLTreeMap$EntryIterator extends Byte2ObjectAVLTreeMap$TreeIterator implements ObjectListIterator<Byte2ObjectMap$Entry<V>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add<V extends unknown>(arg0: Byte2ObjectMap$Entry<V>): void;
    next<V extends unknown>(): Byte2ObjectMap$Entry<V>;
    previous<V extends unknown>(): Byte2ObjectMap$Entry<V>;
    remove(): void;
    set<V extends unknown>(arg0: Byte2ObjectMap$Entry<V>): void;
}