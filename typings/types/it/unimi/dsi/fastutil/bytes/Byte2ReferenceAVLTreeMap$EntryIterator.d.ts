import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { Byte2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ReferenceAVLTreeMap$EntryIterator extends Byte2ReferenceAVLTreeMap$TreeIterator implements ObjectListIterator<Byte2ReferenceMap$Entry<V>> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add<V extends unknown>(arg0: Byte2ReferenceMap$Entry<V>): void;
    next<V extends unknown>(): Byte2ReferenceMap$Entry<V>;
    previous<V extends unknown>(): Byte2ReferenceMap$Entry<V>;
    remove(): void;
    set<V extends unknown>(arg0: Byte2ReferenceMap$Entry<V>): void;
}