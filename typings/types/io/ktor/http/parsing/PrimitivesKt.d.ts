import type { Grammar } from '../../../../io/ktor/http/parsing/Grammar.d.ts'
import type { RawGrammar } from '../../../../io/ktor/http/parsing/RawGrammar.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PrimitivesKt extends Object {
    static getAlpha(): Grammar;
    static getAlphaDigit(): Grammar;
    static getAlphas(): Grammar;
    static getDigit(): RawGrammar;
    static getDigits(): Grammar;
    static getHex(): Grammar;
    static getLowAlpha(): Grammar;
}