import type { JavaMap } from '../../JavaMap.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { HashMap$Node } from '../../java/util/HashMap$Node.d.ts'
import type { LinkedHashMap$Entry } from '../../java/util/LinkedHashMap$Entry.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class HashMap$TreeNode<K extends unknown, V extends unknown> extends LinkedHashMap$Entry<K, V> {
    constructor(arg0: number, arg1: K, arg2: V, arg3: HashMap$Node<K, V>)
    // private left: HashMap$TreeNode<K, V>;
    // private parent: HashMap$TreeNode<K, V>;
    // private prev: HashMap$TreeNode<K, V>;
    // private red: boolean;
    // private right: HashMap$TreeNode<K, V>;
    find(arg0: number, arg1: Object, arg2: Class<Object>): HashMap$TreeNode<K, V>;
    getTreeNode(arg0: number, arg1: Object): HashMap$TreeNode<K, V>;
    putTreeVal(arg0: JavaMap<K, V>, arg1: HashMap$Node<K, V>[], arg2: number, arg3: K, arg4: V): HashMap$TreeNode<K, V>;
    removeTreeNode(arg0: JavaMap<K, V>, arg1: HashMap$Node<K, V>[], arg2: boolean): void;
    root(): HashMap$TreeNode<K, V>;
    split(arg0: JavaMap<K, V>, arg1: HashMap$Node<K, V>[], arg2: number, arg3: number): void;
    treeify(arg0: HashMap$Node<K, V>[]): void;
    untreeify(arg0: JavaMap<K, V>): HashMap$Node<K, V>;
}