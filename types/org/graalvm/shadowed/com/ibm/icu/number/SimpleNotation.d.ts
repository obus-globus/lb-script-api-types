import type { CompactNotation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/CompactNotation.d.ts'
import type { Notation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/Notation.d.ts'
import type { ScientificNotation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/ScientificNotation.d.ts'
export class SimpleNotation extends Notation {
    static compactLong(): CompactNotation;
    static compactShort(): CompactNotation;
    static engineering(): ScientificNotation;
    static scientific(): ScientificNotation;
    static simple(): SimpleNotation;
    constructor()
}