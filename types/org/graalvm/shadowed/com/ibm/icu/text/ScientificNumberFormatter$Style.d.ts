import type { AttributedCharacterIterator } from '../../../../../../../java/text/AttributedCharacterIterator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class ScientificNumberFormatter$Style extends Object {
    private constructor()
    format(iterator: AttributedCharacterIterator, preExponent: string): string;
}