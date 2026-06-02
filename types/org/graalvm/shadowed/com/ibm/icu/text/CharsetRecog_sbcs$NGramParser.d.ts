import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharsetDetector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetDetector.d.ts'
export class CharsetRecog_sbcs$NGramParser extends Object {
    constructor(theNgramList: number[], theByteMap: number[])
    // private byteIndex: number;
    // private byteMap: number[];
    // private hitCount: number;
    // private ngram: number;
    // private ngramCount: number;
    // private ngramList: number[];
    // private spaceChar: number;
    addByte(b: number): void;
    // private lookup(thisNgram: number): void;
    // private nextByte(det: CharsetDetector): number;
    parse(det: CharsetDetector): number;
    parse(det: CharsetDetector, spaceCh: number): number;
    parseCharacters(det: CharsetDetector): void;
}