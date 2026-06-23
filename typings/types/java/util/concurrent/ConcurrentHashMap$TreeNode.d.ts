import type { Class } from '../../../java/lang/Class.d.ts'
import type { ConcurrentHashMap$Node } from '../../../java/util/concurrent/ConcurrentHashMap$Node.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConcurrentHashMap$TreeNode<K extends unknown, V extends unknown> extends ConcurrentHashMap$Node<K, V> {
    constructor(arg0: number, arg1: K, arg2: V, arg3: ConcurrentHashMap$Node<K, V>, arg4: ConcurrentHashMap$TreeNode<K, V>)
    // private left: ConcurrentHashMap$TreeNode<K, V>;
    // private parent: ConcurrentHashMap$TreeNode<K, V>;
    // private prev: ConcurrentHashMap$TreeNode<K, V>;
    // private red: boolean;
    // private right: ConcurrentHashMap$TreeNode<K, V>;
    find(arg0: number, arg1: Object): ConcurrentHashMap$Node<K, V>;
    findTreeNode(arg0: number, arg1: Object, arg2: Class<Object>): ConcurrentHashMap$TreeNode<K, V>;
}