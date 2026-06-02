import type { CharsetDetector } from '../../../../com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetMatch } from '../../../../com/ibm/icu/text/CharsetMatch.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class CharsetRecognizer extends Object {
    constructor()
    getLanguage(): string;
    getName(): string;
    match(arg0: CharsetDetector): CharsetMatch;
}