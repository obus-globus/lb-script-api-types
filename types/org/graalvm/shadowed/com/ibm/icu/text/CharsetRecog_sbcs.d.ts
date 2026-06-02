import type { CharsetDetector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetRecognizer } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetRecognizer.d.ts'
export abstract class CharsetRecog_sbcs extends CharsetRecognizer {
    constructor()
    getName(): string;
    match(det: CharsetDetector, ngrams: number[], byteMap: number[]): number;
    match(det: CharsetDetector, ngrams: number[], byteMap: number[], spaceChar: number): number;
    matchIBM420(det: CharsetDetector, ngrams: number[], byteMap: number[], spaceChar: number): number;
}