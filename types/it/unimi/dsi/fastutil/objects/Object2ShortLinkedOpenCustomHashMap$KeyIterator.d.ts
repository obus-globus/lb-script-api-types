import type { Object2ShortLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortLinkedOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ShortLinkedOpenCustomHashMap$KeyIterator extends Object2ShortLinkedOpenCustomHashMap$MapIterator<Object> implements ObjectListIterator<K> {
    constructor(null_: Object2ShortLinkedOpenCustomHashMap$KeyIterator)
    constructor(null_: Object2ShortLinkedOpenCustomHashMap$KeyIterator)
    acceptOnIndex(arg0: (param0: K) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next<K extends Object | number | string | boolean>(): K;
    previous<K extends Object | number | string | boolean>(): K;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}