import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { ConcurrentHashMap$BaseIterator } from '../../../java/util/concurrent/ConcurrentHashMap$BaseIterator.d.ts'
import type { ConcurrentHashMap$Node } from '../../../java/util/concurrent/ConcurrentHashMap$Node.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class ConcurrentHashMap$KeyIterator<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ConcurrentHashMap$BaseIterator<K, V> implements Enumeration<K>, Iterator<K> {
    constructor(arg0: ConcurrentHashMap$Node<K, V>[], arg1: number, arg2: number, arg3: number, arg4: Map<K, V>)
    asIterator(): Iterator<E>;
    forEachRemaining(arg0: (param0: T) => void): void;
    next(): K;
    nextElement(): K;
}