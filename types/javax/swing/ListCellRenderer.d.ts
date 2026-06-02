import type { Component } from '../../java/awt/Component.d.ts'
import type { JList } from '../../javax/swing/JList.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ListCellRenderer<E extends Object | number | string | boolean> extends Object{
    getListCellRendererComponent(arg0: JList<E>, arg1: E, arg2: number, arg3: boolean, arg4: boolean): Component;
}