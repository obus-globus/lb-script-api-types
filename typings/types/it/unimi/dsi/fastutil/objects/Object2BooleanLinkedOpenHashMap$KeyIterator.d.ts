import type { Object2BooleanLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanLinkedOpenHashMap$MapIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2BooleanLinkedOpenHashMap$KeyIterator extends Object2BooleanLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<K> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: Object)
    acceptOnIndex<K extends unknown>(arg0: (param0: K) => void, arg1: number): void;
    add<K extends unknown>(arg0: K): void;
    next<K extends unknown>(): K;
    previous<K extends unknown>(): K;
    remove(): void;
    set<K extends unknown>(arg0: K): void;
}