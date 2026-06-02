import type { Component } from '../../../java/awt/Component.d.ts'
import type { CellEditor } from '../../../javax/swing/CellEditor.d.ts'
import type { JTree } from '../../../javax/swing/JTree.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TreeCellEditor extends CellEditor, Object{
    getTreeCellEditorComponent(arg0: JTree, arg1: Object, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number): Component;
}