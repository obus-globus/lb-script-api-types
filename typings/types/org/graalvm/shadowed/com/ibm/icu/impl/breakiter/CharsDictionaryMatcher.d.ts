import type { CharacterIterator } from '../../../../../../../../java/text/CharacterIterator.d.ts'
import type { CharSequence } from '../../../../../../../../java/lang/CharSequence.d.ts'
import type { DictionaryMatcher } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/DictionaryMatcher.d.ts'
export class CharsDictionaryMatcher extends DictionaryMatcher {
    constructor(chars: CharSequence)
    // private characters: CharSequence;
    getType(): number;
    matches(text: CharacterIterator, maxLength: number, lengths: number[], count: number[], limit: number): number;
    matches(text_: CharacterIterator, maxLength: number, lengths: number[], count_: number[], limit: number, values: number[]): number;
}