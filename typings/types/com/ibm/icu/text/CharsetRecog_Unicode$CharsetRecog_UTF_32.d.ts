import type { CharsetDetector } from '../../../../com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetMatch } from '../../../../com/ibm/icu/text/CharsetMatch.d.ts'
import type { CharsetRecog_Unicode } from '../../../../com/ibm/icu/text/CharsetRecog_Unicode.d.ts'
export abstract class CharsetRecog_Unicode$CharsetRecog_UTF_32 extends CharsetRecog_Unicode {
    constructor()
    getChar(arg0: number[], arg1: number): number;
    getName(): string;
    match(arg0: CharsetDetector): CharsetMatch;
}