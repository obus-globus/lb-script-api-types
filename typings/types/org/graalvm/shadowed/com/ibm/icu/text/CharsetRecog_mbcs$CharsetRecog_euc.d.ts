import type { CharsetDetector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetRecog_mbcs } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetRecog_mbcs.d.ts'
import type { CharsetRecog_mbcs$iteratedChar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetRecog_mbcs$iteratedChar.d.ts'
export abstract class CharsetRecog_mbcs$CharsetRecog_euc extends CharsetRecog_mbcs {
    constructor()
    nextChar(it: CharsetRecog_mbcs$iteratedChar, det: CharsetDetector): boolean;
}