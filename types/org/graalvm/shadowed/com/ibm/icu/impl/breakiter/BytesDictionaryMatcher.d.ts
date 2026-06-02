import type { CharacterIterator } from '../../../../../../../../java/text/CharacterIterator.d.ts'
import type { DictionaryMatcher } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/DictionaryMatcher.d.ts'
export class BytesDictionaryMatcher extends DictionaryMatcher {
    constructor(chars: number[], transform: number)
    // private characters: number[];
    // private transform: number;
    getType(): number;
    matches(text_: CharacterIterator, maxLength: number, lengths: number[], count_: number[], limit: number, values: number[]): number;
    // private transform(c: number): number;
}