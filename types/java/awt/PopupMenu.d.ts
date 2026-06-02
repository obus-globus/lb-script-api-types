import type { Component } from '../../java/awt/Component.d.ts'
import type { Menu } from '../../java/awt/Menu.d.ts'
import type { MenuContainer } from '../../java/awt/MenuContainer.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
export class PopupMenu extends Menu {
    constructor()
    constructor(arg0: string)
    // private isTrayIconPopup: boolean;
    addNotify(): void;
    constructComponentName(): string;
    getAccessibleContext(): AccessibleContext;
    getParent(): MenuContainer;
    show(arg0: Component, arg1: number, arg2: number): void;
}