import type { CharsetDetector } from '../../../../com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetMatch } from '../../../../com/ibm/icu/text/CharsetMatch.d.ts'
import type { CharsetRecog_Unicode } from '../../../../com/ibm/icu/text/CharsetRecog_Unicode.d.ts'
export class CharsetRecog_Unicode$CharsetRecog_UTF_16_LE extends CharsetRecog_Unicode {
    constructor()
    getName(): string;
    match(arg0: CharsetDetector): CharsetMatch;
}