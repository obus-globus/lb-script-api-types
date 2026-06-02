import type { ConcurrentHashMap$Node } from '../../../java/util/concurrent/ConcurrentHashMap$Node.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConcurrentHashMap$ForwardingNode<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ConcurrentHashMap$Node<K, V> {
    constructor(arg0: ConcurrentHashMap$Node<K, V>[])
    // private nextTable: ConcurrentHashMap$Node<K, V>[];
    find(arg0: number, arg1: Object): ConcurrentHashMap$Node<K, V>;
}