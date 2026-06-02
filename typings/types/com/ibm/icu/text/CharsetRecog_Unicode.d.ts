import type { CharsetDetector } from '../../../../com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetMatch } from '../../../../com/ibm/icu/text/CharsetMatch.d.ts'
import type { CharsetRecognizer } from '../../../../com/ibm/icu/text/CharsetRecognizer.d.ts'
export abstract class CharsetRecog_Unicode extends CharsetRecognizer {
    constructor()
    getName(): string;
    match(arg0: CharsetDetector): CharsetMatch;
}