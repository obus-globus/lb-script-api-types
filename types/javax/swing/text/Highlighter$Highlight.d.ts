import type { Highlighter$HighlightPainter } from '../../../javax/swing/text/Highlighter$HighlightPainter.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Highlighter$Highlight extends Object{
    getEndOffset(): number;
    getPainter(): Highlighter$HighlightPainter;
    getStartOffset(): number;
}