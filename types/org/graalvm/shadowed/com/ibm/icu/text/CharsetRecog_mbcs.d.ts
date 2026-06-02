import type { CharsetDetector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetRecog_mbcs$iteratedChar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetRecog_mbcs$iteratedChar.d.ts'
import type { CharsetRecognizer } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetRecognizer.d.ts'
export abstract class CharsetRecog_mbcs extends CharsetRecognizer {
    constructor()
    getName(): string;
    match(det: CharsetDetector, commonChars: number[]): number;
    nextChar(it: CharsetRecog_mbcs$iteratedChar, det: CharsetDetector): boolean;
}