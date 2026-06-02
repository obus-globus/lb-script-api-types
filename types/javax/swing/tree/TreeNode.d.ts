import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TreeNode extends Object{
    children(): Enumeration<TreeNode>;
    getAllowsChildren(): boolean;
    getChildAt(arg0: number): TreeNode;
    getChildCount(): number;
    getIndex(arg0: TreeNode): number;
    getParent(): TreeNode;
    isLeaf(): boolean;
}