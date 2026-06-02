import type { CharacterIterator } from '../../../../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DictionaryBreakEngine$DequeI } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/DictionaryBreakEngine$DequeI.d.ts'
import type { UResourceBundle } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/UResourceBundle.d.ts'
export class MlBreakEngine extends Object {
    constructor(digitOrOpenPunctuationOrAlphabetSet: string[], closePunctuationSet: string[])
    // private fClosePunctuationSet: string[];
    // private fDigitOrOpenPunctuationOrAlphabetSet: string[];
    // private fModel: { [key: string]: number }[];
    // private fNegativeSum: number;
    divideUpRange(inText: CharacterIterator, startPos: number, endPos: number, inString: CharacterIterator, codePointLength: number, charPositions: number[], foundBreaks: DictionaryBreakEngine$DequeI): number;
    // private evaluateBreakpoint(inputStr: string, indexList: number[], startIdx: number, numCodeUnits: number, boundary: number[]): void;
    // private initIndexList(inString: CharacterIterator, indexList: number[], codePointLength: number): number;
    // private initKeyValue(rb: UResourceBundle, keyName: string, valueName: string, map: { [key: string]: number }): void;
    // private loadMLModel(): void;
    // private transform(inString: CharacterIterator): string;
}