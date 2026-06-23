import type { ConcurrentHashMap$Node } from '../../../java/util/concurrent/ConcurrentHashMap$Node.d.ts'
import type { ConcurrentHashMap$Traverser } from '../../../java/util/concurrent/ConcurrentHashMap$Traverser.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConcurrentHashMap$BaseIterator<K extends unknown, V extends unknown> extends ConcurrentHashMap$Traverser<K, V> {
    constructor(arg0: ConcurrentHashMap$Node<K, V>[], arg1: number, arg2: number, arg3: number, arg4: Map<K, V>)
    // private lastReturned: ConcurrentHashMap$Node<K, V>;
    // private map: Map<K, V>;
    hasMoreElements(): boolean;
    hasNext(): boolean;
    remove(): void;
}