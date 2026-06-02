import type { AttributedCharacterIterator } from '../../../../../../../java/text/AttributedCharacterIterator.d.ts'
import type { ScientificNumberFormatter$Style } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ScientificNumberFormatter$Style.d.ts'
export class ScientificNumberFormatter$MarkupStyle extends ScientificNumberFormatter$Style {
    constructor(beginMarkup: string, endMarkup: string)
    // private beginMarkup: string;
    // private endMarkup: string;
    format(iterator: AttributedCharacterIterator, preExponent: string): string;
}