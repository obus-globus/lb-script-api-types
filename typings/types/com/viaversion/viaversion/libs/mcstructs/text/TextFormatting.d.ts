import type { TextFormatting$Type } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextFormatting$Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TextFormatting extends Object {
    static ALL: { [key: string]: TextFormatting };
    static AQUA: TextFormatting;
    static BLACK: TextFormatting;
    static BLUE: TextFormatting;
    static BOLD: TextFormatting;
    static COLORS: { [key: string]: TextFormatting };
    static COLOR_CHAR: string;
    static DARK_AQUA: TextFormatting;
    static DARK_BLUE: TextFormatting;
    static DARK_GRAY: TextFormatting;
    static DARK_GREEN: TextFormatting;
    static DARK_PURPLE: TextFormatting;
    static DARK_RED: TextFormatting;
    static FORMATTINGS: { [key: string]: TextFormatting };
    static GOLD: TextFormatting;
    static GRAY: TextFormatting;
    static GREEN: TextFormatting;
    static ITALIC: TextFormatting;
    static LIGHT_PURPLE: TextFormatting;
    static OBFUSCATED: TextFormatting;
    static RED: TextFormatting;
    static RESET: TextFormatting;
    static STRIKETHROUGH: TextFormatting;
    static UNDERLINE: TextFormatting;
    static WHITE: TextFormatting;
    static YELLOW: TextFormatting;
    static getByCode(paramarg0: string): TextFormatting;
    static getByName(paramarg0: string): TextFormatting;
    static getByOrdinal(paramarg0: number): TextFormatting;
    static getClosestFormattingColor(paramarg0: number): TextFormatting;
    static parse(paramarg0: string): TextFormatting;
    constructor(arg0: number)
    private constructor(arg0: string, arg1: string)
    private constructor(arg0: string, arg1: string, arg2: number)
    readonly code: string;
    readonly name: string;
    readonly ordinal: number;
    readonly rgbValue: number;
    // private type: TextFormatting$Type;
    equals(arg0: Object | null): boolean;
    getCode(): string;
    getName(): string;
    getOrdinal(): number;
    getRgbValue(): number;
    hashCode(): number;
    isColor(): boolean;
    isFormatting(): boolean;
    isFormattingColor(): boolean;
    isRGBColor(): boolean;
    serialize(): string;
    toLegacy(): string;
    toString(): string;
}