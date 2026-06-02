import type { Point } from '../../../java/awt/Point.d.ts'
import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { JComponent } from '../../../javax/swing/JComponent.d.ts'
import type { JList } from '../../../javax/swing/JList.d.ts'
import type { ComponentUI } from '../../../javax/swing/plaf/ComponentUI.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ListUI extends ComponentUI {
    static createUI(paramarg0: JComponent): ComponentUI;
    constructor()
    getCellBounds(arg0: JList<Object>, arg1: number, arg2: number): Rectangle;
    indexToLocation(arg0: JList<Object>, arg1: number): Point;
    locationToIndex(arg0: JList<Object>, arg1: Point): number;
}