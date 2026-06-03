import type { CharsetDetector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetMatch } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetMatch.d.ts'
import type { CharsetRecog_sbcs } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetRecog_sbcs.d.ts'
export class CharsetRecog_sbcs$CharsetRecog_windows_1256 extends CharsetRecog_sbcs {
    constructor()
    getLanguage(): string;
    getName(): string;
    match(det: CharsetDetector): CharsetMatch;
    match(det: CharsetDetector, ngrams: number[], byteMap: number[]): number;
    match(det: CharsetDetector, ngrams: number[], byteMap: number[], spaceChar: number): number;
}