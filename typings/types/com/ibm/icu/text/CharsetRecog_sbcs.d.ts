import type { CharsetDetector } from '../../../../com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetRecognizer } from '../../../../com/ibm/icu/text/CharsetRecognizer.d.ts'
export abstract class CharsetRecog_sbcs extends CharsetRecognizer {
    constructor()
    getName(): string;
    match(arg0: CharsetDetector, arg1: number[], arg2: number[]): number;
    match(arg0: CharsetDetector, arg1: number[], arg2: number[], arg3: number): number;
    matchIBM420(arg0: CharsetDetector, arg1: number[], arg2: number[], arg3: number): number;
}