import type { CharsetDetector } from '../../../../com/ibm/icu/text/CharsetDetector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CharsetRecog_sbcs$NGramParser extends Object {
    constructor(arg0: number[], arg1: number[])
    // private byteIndex: number;
    // private byteMap: number[];
    // private hitCount: number;
    // private ngram: number;
    // private ngramCount: number;
    // private ngramList: number[];
    // private spaceChar: number;
    addByte(arg0: number): void;
    // private lookup(arg0: number): void;
    // private nextByte(arg0: CharsetDetector): number;
    parse(arg0: CharsetDetector): number;
    parse(arg0: CharsetDetector, arg1: number): number;
    parseCharacters(arg0: CharsetDetector): void;
}