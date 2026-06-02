import type { Point } from '../../java/awt/Point.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { AttributeSet } from '../../javax/swing/text/AttributeSet.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface AccessibleText extends Object{
    getAfterIndex(arg0: number, arg1: number): string;
    getAtIndex(arg0: number, arg1: number): string;
    getBeforeIndex(arg0: number, arg1: number): string;
    getCaretPosition(): number;
    getCharCount(): number;
    getCharacterAttribute(arg0: number): AttributeSet;
    getCharacterBounds(arg0: number): Rectangle;
    getIndexAtPoint(arg0: Point): number;
    getSelectedText(): string;
    getSelectionEnd(): number;
    getSelectionStart(): number;
}