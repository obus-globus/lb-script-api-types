import type { CharsetDetector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetMatch } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetMatch.d.ts'
import type { CharsetRecognizer } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetRecognizer.d.ts'
export abstract class CharsetRecog_Unicode extends CharsetRecognizer {
    constructor()
    getName(): string;
    match(det: CharsetDetector): CharsetMatch;
}