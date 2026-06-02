import type { Graphics } from '../../../java/awt/Graphics.d.ts'
import type { Shape } from '../../../java/awt/Shape.d.ts'
import type { JTextComponent } from '../../../javax/swing/text/JTextComponent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Highlighter$HighlightPainter extends Object{
    paint(arg0: Graphics, arg1: number, arg2: number, arg3: Shape, arg4: JTextComponent): void;
}