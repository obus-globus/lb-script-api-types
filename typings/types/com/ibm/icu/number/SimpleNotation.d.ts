import type { CompactNotation } from '../../../../com/ibm/icu/number/CompactNotation.d.ts'
import type { Notation } from '../../../../com/ibm/icu/number/Notation.d.ts'
import type { ScientificNotation } from '../../../../com/ibm/icu/number/ScientificNotation.d.ts'
export class SimpleNotation extends Notation {
    static compactLong(): CompactNotation;
    static compactShort(): CompactNotation;
    static engineering(): ScientificNotation;
    static scientific(): ScientificNotation;
    static simple(): SimpleNotation;
    constructor()
}