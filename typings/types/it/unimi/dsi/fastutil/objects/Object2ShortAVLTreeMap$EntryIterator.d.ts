import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortAVLTreeMap$TreeIterator.d.ts'
import type { Object2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ShortAVLTreeMap$EntryIterator extends Object2ShortAVLTreeMap$TreeIterator implements ObjectListIterator<Object2ShortMap$Entry<K>> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: Object)
    add<K extends unknown>(arg0: Object2ShortMap$Entry<K>): void;
    next<K extends unknown>(): Object2ShortMap$Entry<K>;
    previous<K extends unknown>(): Object2ShortMap$Entry<K>;
    remove(): void;
    set<K extends unknown>(arg0: Object2ShortMap$Entry<K>): void;
}