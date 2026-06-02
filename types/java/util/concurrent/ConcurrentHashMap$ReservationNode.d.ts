import type { ConcurrentHashMap$Node } from '../../../java/util/concurrent/ConcurrentHashMap$Node.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConcurrentHashMap$ReservationNode<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ConcurrentHashMap$Node<K, V> {
    constructor()
    find(arg0: number, arg1: Object): ConcurrentHashMap$Node<K, V>;
}