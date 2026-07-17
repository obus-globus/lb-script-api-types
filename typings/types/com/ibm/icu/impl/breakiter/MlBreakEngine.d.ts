import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { DictionaryBreakEngine$DequeI } from '../../../../../com/ibm/icu/impl/breakiter/DictionaryBreakEngine$DequeI.d.ts'
import type { UResourceBundle } from '../../../../../com/ibm/icu/util/UResourceBundle.d.ts'
import type { CharacterIterator } from '../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MlBreakEngine extends Object {
    constructor(arg0: string[], arg1: string[])
    // private fClosePunctuationSet: string[];
    // private fDigitOrOpenPunctuationOrAlphabetSet: string[];
    // private fModel: JavaMap<string, number>[];
    // private fNegativeSum: number;
    divideUpRange(arg0: CharacterIterator, arg1: number, arg2: number, arg3: CharacterIterator, arg4: number, arg5: number[], arg6: DictionaryBreakEngine$DequeI): number;
    // private evaluateBreakpoint(arg0: string, arg1: number[], arg2: number, arg3: number, arg4: number[]): void;
    // private initIndexList(arg0: CharacterIterator, arg1: number[], arg2: number): number;
    // private initKeyValue(arg0: UResourceBundle, arg1: string, arg2: string, arg3: JavaMap<string, number>): void;
    // private loadMLModel(): void;
    // private transform(arg0: CharacterIterator): string;
}