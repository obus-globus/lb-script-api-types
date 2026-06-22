import type { Point } from '../../java/awt/Point.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { AccessibleText } from '../../javax/accessibility/AccessibleText.d.ts'
import type { AttributeSet } from '../../javax/swing/text/AttributeSet.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface AccessibleEditableText extends AccessibleText, Object{
    cut(arg0: number, arg1: number): void;
    delete(arg0: number, arg1: number): void;
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
    getTextRange(arg0: number, arg1: number): string;
    insertTextAtIndex(arg0: number, arg1: string): void;
    paste(arg0: number): void;
    replaceText(arg0: number, arg1: number, arg2: string): void;
    selectText(arg0: number, arg1: number): void;
    setAttributes(arg0: number, arg1: number, arg2: AttributeSet): void;
    setTextContents(arg0: string): void;
}