import type { Component } from '../../java/awt/Component.d.ts'
import type { KeyEvent } from '../../java/awt/event/KeyEvent.d.ts'
import type { MouseEvent } from '../../java/awt/event/MouseEvent.d.ts'
import type { MenuSelectionManager } from '../../javax/swing/MenuSelectionManager.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface MenuElement extends Object{
    getComponent(): Component;
    getSubElements(): MenuElement[];
    menuSelectionChanged(arg0: boolean): void;
    processKeyEvent(arg0: KeyEvent, arg1: MenuElement[], arg2: MenuSelectionManager): void;
    processMouseEvent(arg0: MouseEvent, arg1: MenuElement[], arg2: MenuSelectionManager): void;
}