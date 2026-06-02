import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharsetDetector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetMatch } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetMatch.d.ts'
export abstract class CharsetRecognizer extends Object {
    constructor()
    getLanguage(): string;
    getName(): string;
    match(det: CharsetDetector): CharsetMatch;
}