import type { CharsetDetector } from '../../../../com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetRecog_mbcs } from '../../../../com/ibm/icu/text/CharsetRecog_mbcs.d.ts'
import type { CharsetRecog_mbcs$iteratedChar } from '../../../../com/ibm/icu/text/CharsetRecog_mbcs$iteratedChar.d.ts'
export abstract class CharsetRecog_mbcs$CharsetRecog_euc extends CharsetRecog_mbcs {
    constructor()
    nextChar(arg0: CharsetRecog_mbcs$iteratedChar, arg1: CharsetDetector): boolean;
}