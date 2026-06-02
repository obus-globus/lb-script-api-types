import type { Component } from '../../../java/awt/Component.d.ts'
import type { JTree } from '../../../javax/swing/JTree.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TreeCellRenderer extends Object{
    getTreeCellRendererComponent(arg0: JTree, arg1: Object, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: boolean): Component;
}