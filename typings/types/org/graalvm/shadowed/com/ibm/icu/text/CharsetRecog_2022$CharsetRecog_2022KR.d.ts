import type { CharsetDetector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetMatch } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetMatch.d.ts'
import type { CharsetRecog_2022 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetRecog_2022.d.ts'
export class CharsetRecog_2022$CharsetRecog_2022KR extends CharsetRecog_2022 {
    constructor()
    // private escapeSequences: number[][];
    getName(): string;
    match(text: number[], textLen: number, escapeSequences: number[][]): number;
    match(det: CharsetDetector): CharsetMatch;
}