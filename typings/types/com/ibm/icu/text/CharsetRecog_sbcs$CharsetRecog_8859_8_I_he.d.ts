import type { CharsetDetector } from '../../../../com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetMatch } from '../../../../com/ibm/icu/text/CharsetMatch.d.ts'
import type { CharsetRecog_sbcs$CharsetRecog_8859_8 } from '../../../../com/ibm/icu/text/CharsetRecog_sbcs$CharsetRecog_8859_8.d.ts'
export class CharsetRecog_sbcs$CharsetRecog_8859_8_I_he extends CharsetRecog_sbcs$CharsetRecog_8859_8 {
    constructor()
    getLanguage(): string;
    getName(): string;
    match(arg0: CharsetDetector): CharsetMatch;
    match(arg0: CharsetDetector, arg1: number[], arg2: number[]): number;
    match(arg0: CharsetDetector, arg1: number[], arg2: number[], arg3: number): number;
}