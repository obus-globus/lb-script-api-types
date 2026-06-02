import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Reference2ReferenceLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceLinkedOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ReferenceLinkedOpenHashMap$KeyIterator extends Reference2ReferenceLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<K> {
    constructor(null_: Reference2ReferenceLinkedOpenHashMap$KeyIterator)
    constructor(null_: Reference2ReferenceLinkedOpenHashMap$KeyIterator)
    acceptOnIndex(arg0: (param0: K) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next<K extends Object | number | string | boolean>(): K;
    previous<K extends Object | number | string | boolean>(): K;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}