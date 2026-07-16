import type { Object } from '../../../../java/lang/Object.d.ts'
export class CharUtils extends Object {
    static CR: string;
    static LF: string;
    static NUL: string;
    static compare(paramarg0: string, paramarg1: string): number;
    static isAscii(paramarg0: string): boolean;
    static isAsciiAlpha(paramarg0: string): boolean;
    static isAsciiAlphaLower(paramarg0: string): boolean;
    static isAsciiAlphaUpper(paramarg0: string): boolean;
    static isAsciiAlphanumeric(paramarg0: string): boolean;
    static isAsciiControl(paramarg0: string): boolean;
    static isAsciiNumeric(paramarg0: string): boolean;
    static isAsciiPrintable(paramarg0: string): boolean;
    static isHex(paramarg0: string): boolean;
    static isOctal(paramarg0: string): boolean;
    static toChar(paramarg0: string): string;
    static toChar(paramarg0: string, paramarg1: string): string;
    static toCharacterObject(paramarg0: string): string;
    static toIntValue(paramarg0: string): number;
    static toIntValue(paramarg0: string, paramarg1: number): number;
    static toString(paramarg0: string): string;
    static unicodeEscaped(paramarg0: string): string;
    constructor()
}