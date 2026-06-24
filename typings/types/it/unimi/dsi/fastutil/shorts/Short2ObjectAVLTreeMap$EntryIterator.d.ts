import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { Short2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ObjectAVLTreeMap$EntryIterator extends Short2ObjectAVLTreeMap$TreeIterator implements ObjectListIterator<Short2ObjectMap$Entry<V>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add<V extends unknown>(arg0: Short2ObjectMap$Entry<V>): void;
    next<V extends unknown>(): Short2ObjectMap$Entry<V>;
    previous<V extends unknown>(): Short2ObjectMap$Entry<V>;
    remove(): void;
    set<V extends unknown>(arg0: Short2ObjectMap$Entry<V>): void;
}