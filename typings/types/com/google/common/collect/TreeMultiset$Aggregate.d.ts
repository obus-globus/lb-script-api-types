import type { TreeMultiset$AvlNode } from '../../../../com/google/common/collect/TreeMultiset$AvlNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TreeMultiset$Aggregate extends Enum<TreeMultiset$Aggregate> {
    static DISTINCT: TreeMultiset$Aggregate;
    static SIZE: TreeMultiset$Aggregate;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TreeMultiset$Aggregate;
    static values(): (Object | null)[];
    private constructor()
    nodeAggregate(node: TreeMultiset$AvlNode<Object>): number;
    treeAggregate(root: TreeMultiset$AvlNode<Object>): number;
    name(): "SIZE" | "DISTINCT";
}