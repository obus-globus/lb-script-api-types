import type { CharsetRecognizer } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetRecognizer.d.ts'
export abstract class CharsetRecog_2022 extends CharsetRecognizer {
    constructor()
    match(text: number[], textLen: number, escapeSequences: number[][]): number;
}