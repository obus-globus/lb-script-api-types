import type { CharsetDetector } from '../../../../com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetMatch } from '../../../../com/ibm/icu/text/CharsetMatch.d.ts'
import type { CharsetRecog_2022 } from '../../../../com/ibm/icu/text/CharsetRecog_2022.d.ts'
export class CharsetRecog_2022$CharsetRecog_2022JP extends CharsetRecog_2022 {
    constructor()
    // private escapeSequences: number[][];
    getName(): string;
    match(arg0: CharsetDetector): CharsetMatch;
    match(arg0: number[], arg1: number, arg2: number[][]): number;
}