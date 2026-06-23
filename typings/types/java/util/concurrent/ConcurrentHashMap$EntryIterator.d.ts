import type { ConcurrentHashMap$BaseIterator } from '../../../java/util/concurrent/ConcurrentHashMap$BaseIterator.d.ts'
import type { ConcurrentHashMap$Node } from '../../../java/util/concurrent/ConcurrentHashMap$Node.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class ConcurrentHashMap$EntryIterator<K extends unknown, V extends unknown> extends ConcurrentHashMap$BaseIterator<K, V> implements Iterator<Map$Entry<K, V>> {
    constructor(arg0: ConcurrentHashMap$Node<K, V>[], arg1: number, arg2: number, arg3: number, arg4: Map<K, V>)
    forEachRemaining(arg0: (param0: Map$Entry<K, V>) => void): void;
    next(): Map$Entry<K, V>;
}