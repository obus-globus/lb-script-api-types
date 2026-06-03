import type { CharsetDetector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetMatch } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetMatch.d.ts'
import type { CharsetRecog_sbcs$CharsetRecog_IBM420_ar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetRecog_sbcs$CharsetRecog_IBM420_ar.d.ts'
export class CharsetRecog_sbcs$CharsetRecog_IBM420_ar_ltr extends CharsetRecog_sbcs$CharsetRecog_IBM420_ar {
    constructor()
    getName(): string;
    match(det: CharsetDetector): CharsetMatch;
    match(det: CharsetDetector, ngrams: number[], byteMap: number[]): number;
    match(det: CharsetDetector, ngrams: number[], byteMap: number[], spaceChar: number): number;
}