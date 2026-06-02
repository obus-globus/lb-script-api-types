import type { Component$BaselineResizeBehavior } from '../../../java/awt/Component$BaselineResizeBehavior.d.ts'
import type { Dimension } from '../../../java/awt/Dimension.d.ts'
import type { Graphics } from '../../../java/awt/Graphics.d.ts'
import type { Accessible } from '../../../javax/accessibility/Accessible.d.ts'
import type { JComponent } from '../../../javax/swing/JComponent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ComponentUI extends Object {
    static createUI(paramarg0: JComponent): ComponentUI;
    constructor()
    contains(arg0: JComponent, arg1: number, arg2: number): boolean;
    getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
    getAccessibleChildrenCount(arg0: JComponent): number;
    getBaseline(arg0: JComponent, arg1: number, arg2: number): number;
    getBaselineResizeBehavior(arg0: JComponent): Component$BaselineResizeBehavior;
    getMaximumSize(arg0: JComponent): Dimension;
    getMinimumSize(arg0: JComponent): Dimension;
    getPreferredSize(arg0: JComponent): Dimension;
    installUI(arg0: JComponent): void;
    paint(arg0: Graphics, arg1: JComponent): void;
    uninstallUI(arg0: JComponent): void;
    update(arg0: Graphics, arg1: JComponent): void;
}