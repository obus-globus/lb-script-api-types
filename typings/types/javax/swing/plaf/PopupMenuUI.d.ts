import type { MouseEvent } from '../../../java/awt/event/MouseEvent.d.ts'
import type { JComponent } from '../../../javax/swing/JComponent.d.ts'
import type { JPopupMenu } from '../../../javax/swing/JPopupMenu.d.ts'
import type { Popup } from '../../../javax/swing/Popup.d.ts'
import type { ComponentUI } from '../../../javax/swing/plaf/ComponentUI.d.ts'
export abstract class PopupMenuUI extends ComponentUI {
    static createUI(paramarg0: JComponent): ComponentUI;
    constructor()
    getPopup(arg0: JPopupMenu, arg1: number, arg2: number): Popup;
    isPopupTrigger(arg0: MouseEvent): boolean;
}