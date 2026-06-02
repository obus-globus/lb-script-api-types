import type { Graphics } from '../../../java/awt/Graphics.d.ts'
import type { Point } from '../../../java/awt/Point.d.ts'
import type { ChangeListener } from '../../../javax/swing/event/ChangeListener.d.ts'
import type { JTextComponent } from '../../../javax/swing/text/JTextComponent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Caret extends Object{
    addChangeListener(arg0: ChangeListener): void;
    deinstall(arg0: JTextComponent): void;
    getBlinkRate(): number;
    getDot(): number;
    getMagicCaretPosition(): Point;
    getMark(): number;
    install(arg0: JTextComponent): void;
    isSelectionVisible(): boolean;
    isVisible(): boolean;
    moveDot(arg0: number): void;
    paint(arg0: Graphics): void;
    removeChangeListener(arg0: ChangeListener): void;
    setBlinkRate(arg0: number): void;
    setDot(arg0: number): void;
    setMagicCaretPosition(arg0: Point): void;
    setSelectionVisible(arg0: boolean): void;
    setVisible(arg0: boolean): void;
}