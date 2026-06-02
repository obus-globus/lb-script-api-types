import type { AttributedCharacterIterator } from '../../../../../../../java/text/AttributedCharacterIterator.d.ts'
import type { ScientificNumberFormatter$Style } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ScientificNumberFormatter$Style.d.ts'
export class ScientificNumberFormatter$SuperscriptStyle extends ScientificNumberFormatter$Style {
    private constructor()
    format(iterator: AttributedCharacterIterator, preExponent: string): string;
}