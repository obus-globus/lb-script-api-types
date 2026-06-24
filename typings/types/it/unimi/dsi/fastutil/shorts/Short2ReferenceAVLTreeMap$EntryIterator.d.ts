import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { Short2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ReferenceAVLTreeMap$EntryIterator extends Short2ReferenceAVLTreeMap$TreeIterator implements ObjectListIterator<Short2ReferenceMap$Entry<V>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add<V extends unknown>(arg0: Short2ReferenceMap$Entry<V>): void;
    next<V extends unknown>(): Short2ReferenceMap$Entry<V>;
    previous<V extends unknown>(): Short2ReferenceMap$Entry<V>;
    remove(): void;
    set<V extends unknown>(arg0: Short2ReferenceMap$Entry<V>): void;
}