import type { CharsetDetector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetMatch } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetMatch.d.ts'
import type { CharsetRecog_mbcs } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetRecog_mbcs.d.ts'
import type { CharsetRecog_mbcs$iteratedChar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetRecog_mbcs$iteratedChar.d.ts'
export class CharsetRecog_mbcs$CharsetRecog_big5 extends CharsetRecog_mbcs {
    constructor()
    getLanguage(): string;
    getName(): string;
    match(det: CharsetDetector): CharsetMatch;
    nextChar(it: CharsetRecog_mbcs$iteratedChar, det: CharsetDetector): boolean;
}