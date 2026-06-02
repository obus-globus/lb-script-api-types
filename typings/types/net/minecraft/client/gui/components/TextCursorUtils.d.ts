import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
export class TextCursorUtils extends Object {
    static CURSOR_INSERT_WIDTH: number;
    static extractAppendCursor(paramgraphics: GuiGraphicsExtractor, paramfont: Font, paramx: number, paramy: number, paramcolor: number, paramshadow: boolean): void;
    static extractInsertCursor(paramgraphics: GuiGraphicsExtractor, paramx: number, paramy: number, paramcolor: number, paramlineHeight: number): void;
    static isCursorVisible(paramtimeInMs: number): boolean;
    constructor()
}