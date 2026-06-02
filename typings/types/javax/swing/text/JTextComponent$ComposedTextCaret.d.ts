import type { Color } from '../../../java/awt/Color.d.ts'
import type { Graphics } from '../../../java/awt/Graphics.d.ts'
import type { MouseEvent } from '../../../java/awt/event/MouseEvent.d.ts'
import type { Rectangle2D } from '../../../java/awt/geom/Rectangle2D.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { DefaultCaret } from '../../../javax/swing/text/DefaultCaret.d.ts'
import type { JTextComponent } from '../../../javax/swing/text/JTextComponent.d.ts'
export class JTextComponent$ComposedTextCaret extends DefaultCaret implements Serializable {
    static ALWAYS_UPDATE: number;
    static NEVER_UPDATE: number;
    static OUT_BOTTOM: number;
    static OUT_LEFT: number;
    static OUT_RIGHT: number;
    static OUT_TOP: number;
    static UPDATE_WHEN_ON_EDT: number;
    static intersect(paramarg0: Rectangle2D, paramarg1: Rectangle2D, paramarg2: Rectangle2D): void;
    static union(paramarg0: Rectangle2D, paramarg1: Rectangle2D, paramarg2: Rectangle2D): void;
    constructor(null_: JTextComponent$ComposedTextCaret)
    // private bg: Color;
    install(arg0: JTextComponent): void;
    paint(arg0: Graphics): void;
    positionCaret(arg0: MouseEvent): void;
}