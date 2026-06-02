import type { CharacterIterator } from '../../../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CharacterIteration extends Object {
    static DONE32: number;
    static current32(paramci: CharacterIterator): number;
    static next32(paramci: CharacterIterator): number;
    static nextTrail32(paramci: CharacterIterator, paramlead: number): number;
    static previous32(paramci: CharacterIterator): number;
    private constructor()
}