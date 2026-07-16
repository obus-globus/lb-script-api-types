import type { Multisets$AbstractEntry } from '../../../../com/google/common/collect/Multisets$AbstractEntry.d.ts'
import type { TreeMultiset$AvlNode } from '../../../../com/google/common/collect/TreeMultiset$AvlNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TreeMultiset$Aggregate extends Enum<TreeMultiset$Aggregate> {
    static DISTINCT: TreeMultiset$Aggregate;
    static SIZE: TreeMultiset$Aggregate;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TreeMultiset$Aggregate;
    static values(): TreeMultiset$Aggregate[];
    constructor(arg2: Multisets$AbstractEntry<E>)
    nodeAggregate(node: TreeMultiset$AvlNode<Object>): number;
    treeAggregate(root: TreeMultiset$AvlNode<Object>): number;
    name(): "SIZE" | "DISTINCT";
}