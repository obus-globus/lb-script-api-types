import type { TreeModelListener } from '../../../javax/swing/event/TreeModelListener.d.ts'
import type { TreePath } from '../../../javax/swing/tree/TreePath.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TreeModel extends Object{
    addTreeModelListener(arg0: TreeModelListener): void;
    getChild(arg0: Object, arg1: number): Object;
    getChildCount(arg0: Object): number;
    getIndexOfChild(arg0: Object, arg1: Object): number;
    getRoot(): Object;
    isLeaf(arg0: Object): boolean;
    removeTreeModelListener(arg0: TreeModelListener): void;
    valueForPathChanged(arg0: TreePath, arg1: Object): void;
}