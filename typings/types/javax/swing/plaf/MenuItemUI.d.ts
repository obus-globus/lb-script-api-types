import type { JComponent } from '../../../javax/swing/JComponent.d.ts'
import type { ButtonUI } from '../../../javax/swing/plaf/ButtonUI.d.ts'
import type { ComponentUI } from '../../../javax/swing/plaf/ComponentUI.d.ts'
export abstract class MenuItemUI extends ButtonUI {
    static createUI(paramarg0: JComponent): ComponentUI;
    constructor()
}