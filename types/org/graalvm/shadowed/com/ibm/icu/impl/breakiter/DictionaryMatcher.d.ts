import type { CharacterIterator } from '../../../../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export abstract class DictionaryMatcher extends Object {
    constructor()
    getType(): number;
    matches(text: CharacterIterator, maxLength: number, lengths: number[], count: number[], limit: number): number;
    matches(text: CharacterIterator, maxLength: number, lengths: number[], count: number[], limit: number, values: number[]): number;
}