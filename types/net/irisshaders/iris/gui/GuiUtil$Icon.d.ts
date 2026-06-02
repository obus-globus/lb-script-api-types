import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GuiGraphicsExtractor } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
export class GuiUtil$Icon extends Object {
    static CLOSE: GuiUtil$Icon;
    static EXPORT: GuiUtil$Icon;
    static EXPORT_COLORED: GuiUtil$Icon;
    static IMPORT: GuiUtil$Icon;
    static IMPORT_COLORED: GuiUtil$Icon;
    static REFRESH: GuiUtil$Icon;
    static SEARCH: GuiUtil$Icon;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    readonly height: number;
    // private u: number;
    // private v: number;
    readonly width: number;
    draw(arg0: GuiGraphicsExtractor, arg1: number, arg2: number): void;
    getHeight(): number;
    getWidth(): number;
}