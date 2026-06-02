import type { DictionaryMatcher } from '../../../../../com/ibm/icu/impl/breakiter/DictionaryMatcher.d.ts'
import type { CharacterIterator } from '../../../../../java/text/CharacterIterator.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class CharsDictionaryMatcher extends DictionaryMatcher {
    constructor(arg0: CharSequence)
    // private characters: CharSequence;
    getType(): number;
    matches(arg0: CharacterIterator, arg1: number, arg2: number[], arg3: number[], arg4: number, arg5: number[]): number;
}