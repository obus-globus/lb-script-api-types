import type { Point } from '../../../java/awt/Point.d.ts'
import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { Point2D } from '../../../java/awt/geom/Point2D.d.ts'
import type { Rectangle2D } from '../../../java/awt/geom/Rectangle2D.d.ts'
import type { JComponent } from '../../../javax/swing/JComponent.d.ts'
import type { ComponentUI } from '../../../javax/swing/plaf/ComponentUI.d.ts'
import type { EditorKit } from '../../../javax/swing/text/EditorKit.d.ts'
import type { JTextComponent } from '../../../javax/swing/text/JTextComponent.d.ts'
import type { Position$Bias } from '../../../javax/swing/text/Position$Bias.d.ts'
import type { View } from '../../../javax/swing/text/View.d.ts'
export abstract class TextUI extends ComponentUI {
    static createUI(paramarg0: JComponent): ComponentUI;
    constructor()
    damageRange(arg0: JTextComponent, arg1: number, arg2: number): void;
    damageRange(arg0: JTextComponent, arg1: number, arg2: number, arg3: Position$Bias, arg4: Position$Bias): void;
    getEditorKit(arg0: JTextComponent): EditorKit;
    getNextVisualPositionFrom(arg0: JTextComponent, arg1: number, arg2: Position$Bias, arg3: number, arg4: Position$Bias[]): number;
    getRootView(arg0: JTextComponent): View;
    getToolTipText(arg0: JTextComponent, arg1: Point): string;
    getToolTipText2D(arg0: JTextComponent, arg1: Point2D): string;
    modelToView(arg0: JTextComponent, arg1: number): Rectangle;
    modelToView(arg0: JTextComponent, arg1: number, arg2: Position$Bias): Rectangle;
    modelToView2D(arg0: JTextComponent, arg1: number, arg2: Position$Bias): Rectangle2D;
    viewToModel(arg0: JTextComponent, arg1: Point): number;
    viewToModel(arg0: JTextComponent, arg1: Point, arg2: Position$Bias[]): number;
    viewToModel2D(arg0: JTextComponent, arg1: Point2D, arg2: Position$Bias[]): number;
}