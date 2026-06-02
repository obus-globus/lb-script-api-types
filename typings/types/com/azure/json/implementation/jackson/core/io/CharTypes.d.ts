import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CharTypes extends Object {
    static appendQuoted(paramarg0: StringBuilder, paramarg1: string): void;
    static charToHex(paramarg0: number): number;
    static copyHexBytes(): number[];
    static copyHexChars(): string[];
    static get7BitOutputEscapes(): number[];
    static get7BitOutputEscapes(paramarg0: number): number[];
    static getInputCodeComment(): number[];
    static getInputCodeLatin1(): number[];
    static getInputCodeLatin1JsNames(): number[];
    static getInputCodeUtf8(): number[];
    static getInputCodeUtf8JsNames(): number[];
    static hexToChar(paramarg0: number): string;
    constructor()
}