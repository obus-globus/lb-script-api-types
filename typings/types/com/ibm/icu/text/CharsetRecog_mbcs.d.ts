import type { CharsetDetector } from '../../../../com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetRecog_mbcs$iteratedChar } from '../../../../com/ibm/icu/text/CharsetRecog_mbcs$iteratedChar.d.ts'
import type { CharsetRecognizer } from '../../../../com/ibm/icu/text/CharsetRecognizer.d.ts'
export abstract class CharsetRecog_mbcs extends CharsetRecognizer {
    constructor()
    getName(): string;
    match(arg0: CharsetDetector, arg1: number[]): number;
    nextChar(arg0: CharsetRecog_mbcs$iteratedChar, arg1: CharsetDetector): boolean;
}