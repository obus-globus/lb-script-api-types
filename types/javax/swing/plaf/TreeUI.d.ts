import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { JComponent } from '../../../javax/swing/JComponent.d.ts'
import type { JTree } from '../../../javax/swing/JTree.d.ts'
import type { ComponentUI } from '../../../javax/swing/plaf/ComponentUI.d.ts'
import type { TreePath } from '../../../javax/swing/tree/TreePath.d.ts'
export abstract class TreeUI extends ComponentUI {
    static createUI(paramarg0: JComponent): ComponentUI;
    constructor()
    cancelEditing(arg0: JTree): void;
    getClosestPathForLocation(arg0: JTree, arg1: number, arg2: number): TreePath;
    getEditingPath(arg0: JTree): TreePath;
    getPathBounds(arg0: JTree, arg1: TreePath): Rectangle;
    getPathForRow(arg0: JTree, arg1: number): TreePath;
    getRowCount(arg0: JTree): number;
    getRowForPath(arg0: JTree, arg1: TreePath): number;
    isEditing(arg0: JTree): boolean;
    startEditingAtPath(arg0: JTree, arg1: TreePath): void;
    stopEditing(arg0: JTree): boolean;
}