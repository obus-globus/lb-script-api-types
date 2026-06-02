import type { Enumeration } from '../../../../../java/util/Enumeration.d.ts'
import type { TreeNode } from '../../../../../javax/swing/tree/TreeNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricMainWindow$IconInfo } from '../../../../../net/fabricmc/loader/impl/gui/FabricMainWindow$IconInfo.d.ts'
import type { FabricStatusTree$FabricStatusNode } from '../../../../../net/fabricmc/loader/impl/gui/FabricStatusTree$FabricStatusNode.d.ts'
import type { FabricStatusTree$FabricTreeWarningLevel } from '../../../../../net/fabricmc/loader/impl/gui/FabricStatusTree$FabricTreeWarningLevel.d.ts'
export class FabricMainWindow$CustomTreeNode extends Object implements TreeNode {
    constructor(arg0: TreeNode, arg1: FabricStatusTree$FabricStatusNode, arg2: FabricStatusTree$FabricTreeWarningLevel)
    displayedChildren: FabricMainWindow$CustomTreeNode[];
    readonly iconInfo: FabricMainWindow$IconInfo;
    node: FabricStatusTree$FabricStatusNode;
    readonly parent: TreeNode;
    children(): Enumeration<FabricMainWindow$CustomTreeNode>;
    getAllowsChildren(): boolean;
    getChildAt(arg0: number): TreeNode;
    getChildCount(): number;
    getIconInfo(): FabricMainWindow$IconInfo;
    getIndex(arg0: TreeNode): number;
    getParent(): TreeNode;
    isLeaf(): boolean;
    toString(): string;
}