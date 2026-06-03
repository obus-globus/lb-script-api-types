import type { CharsetDetector } from '../../../../com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetMatch } from '../../../../com/ibm/icu/text/CharsetMatch.d.ts'
import type { CharsetRecog_sbcs } from '../../../../com/ibm/icu/text/CharsetRecog_sbcs.d.ts'
export class CharsetRecog_sbcs$CharsetRecog_windows_1251 extends CharsetRecog_sbcs {
    constructor()
    getLanguage(): string;
    getName(): string;
    match(arg0: CharsetDetector): CharsetMatch;
    match(arg0: CharsetDetector, arg1: number[], arg2: number[]): number;
    match(arg0: CharsetDetector, arg1: number[], arg2: number[], arg3: number): number;
}