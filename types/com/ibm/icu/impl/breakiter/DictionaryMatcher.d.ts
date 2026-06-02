import type { CharacterIterator } from '../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DictionaryMatcher extends Object {
    constructor()
    getType(): number;
    matches(arg0: CharacterIterator, arg1: number, arg2: number[], arg3: number[], arg4: number): number;
    matches(arg0: CharacterIterator, arg1: number, arg2: number[], arg3: number[], arg4: number, arg5: number[]): number;
}