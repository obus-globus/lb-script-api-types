import type { Graphics } from '../../../java/awt/Graphics.d.ts'
import type { Highlighter$Highlight } from '../../../javax/swing/text/Highlighter$Highlight.d.ts'
import type { Highlighter$HighlightPainter } from '../../../javax/swing/text/Highlighter$HighlightPainter.d.ts'
import type { JTextComponent } from '../../../javax/swing/text/JTextComponent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Highlighter extends Object{
    addHighlight(arg0: number, arg1: number, arg2: Highlighter$HighlightPainter): Object;
    changeHighlight(arg0: Object, arg1: number, arg2: number): void;
    deinstall(arg0: JTextComponent): void;
    getHighlights(): Highlighter$Highlight[];
    install(arg0: JTextComponent): void;
    paint(arg0: Graphics): void;
    removeAllHighlights(): void;
    removeHighlight(arg0: Object): void;
}