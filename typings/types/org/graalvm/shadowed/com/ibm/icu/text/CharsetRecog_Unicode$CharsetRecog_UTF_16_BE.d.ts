import type { CharsetDetector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetMatch } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetMatch.d.ts'
import type { CharsetRecog_Unicode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetRecog_Unicode.d.ts'
export class CharsetRecog_Unicode$CharsetRecog_UTF_16_BE extends CharsetRecog_Unicode {
    constructor()
    getName(): string;
    match(det: CharsetDetector): CharsetMatch;
}