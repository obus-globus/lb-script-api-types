import type { Object } from '../../java/lang/Object.d.ts'
import type { Font2D } from '../../sun/font/Font2D.d.ts'
export class FontFamily extends Object {
    static getAllFamilyNames(): string[];
    static getAllFontFamilies(): FontFamily[];
    static getFamily(paramarg0: string): FontFamily;
    static getLocaleFamily(paramarg0: string): FontFamily;
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean, arg2: number)
    // private bold: Font2D;
    // private bolditalic: Font2D;
    familyName: string;
    // private familyRank: number;
    // private familyWidth: number;
    // private italic: Font2D;
    // private logicalFont: boolean;
    // private plain: Font2D;
    // private closerWeight(arg0: Font2D, arg1: Font2D, arg2: number): boolean;
    getClosestStyle(arg0: number): Font2D;
    getFamilyName(): string;
    getFont(arg0: number): Font2D;
    getFontWithExactStyleMatch(arg0: number): Font2D;
    getRank(): number;
    // private isFromSameSource(arg0: Font2D): boolean;
    // private preferredWidth(arg0: Font2D): boolean;
    setFont(arg0: Font2D, arg1: number): void;
    toString(): string;
}