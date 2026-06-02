import type { CharsetDetector } from '../../../../com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetMatch } from '../../../../com/ibm/icu/text/CharsetMatch.d.ts'
import type { CharsetRecog_mbcs } from '../../../../com/ibm/icu/text/CharsetRecog_mbcs.d.ts'
import type { CharsetRecog_mbcs$iteratedChar } from '../../../../com/ibm/icu/text/CharsetRecog_mbcs$iteratedChar.d.ts'
export class CharsetRecog_mbcs$CharsetRecog_big5 extends CharsetRecog_mbcs {
    constructor()
    getLanguage(): string;
    getName(): string;
    match(arg0: CharsetDetector): CharsetMatch;
    nextChar(arg0: CharsetRecog_mbcs$iteratedChar, arg1: CharsetDetector): boolean;
}