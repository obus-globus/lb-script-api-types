import type { CharsetDetector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetMatch } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetMatch.d.ts'
import type { CharsetRecog_sbcs$CharsetRecog_8859_8 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetRecog_sbcs$CharsetRecog_8859_8.d.ts'
export class CharsetRecog_sbcs$CharsetRecog_8859_8_I_he extends CharsetRecog_sbcs$CharsetRecog_8859_8 {
    constructor()
    getLanguage(): string;
    getName(): string;
    match(det: CharsetDetector): CharsetMatch;
    match(det: CharsetDetector, ngrams: number[], byteMap: number[]): number;
    match(det: CharsetDetector, ngrams: number[], byteMap: number[], spaceChar: number): number;
}