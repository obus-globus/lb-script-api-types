import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { ConcurrentHashMap$Node } from '../../../java/util/concurrent/ConcurrentHashMap$Node.d.ts'
import type { ConcurrentHashMap$TreeNode } from '../../../java/util/concurrent/ConcurrentHashMap$TreeNode.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConcurrentHashMap$TreeBin<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ConcurrentHashMap$Node<K, V> {
    constructor(arg0: ConcurrentHashMap$TreeNode<K, V>)
    // private first: ConcurrentHashMap$TreeNode<K, V>;
    // private lockState: number;
    // private root: ConcurrentHashMap$TreeNode<K, V>;
    // private waiter: Thread;
    // private contendedLock(): void;
    find(arg0: number, arg1: Object): ConcurrentHashMap$Node<K, V>;
    // private lockRoot(): void;
    putTreeVal(arg0: number, arg1: K, arg2: V): ConcurrentHashMap$TreeNode<K, V>;
    removeTreeNode(arg0: ConcurrentHashMap$TreeNode<K, V>): boolean;
    // private unlockRoot(): void;
}