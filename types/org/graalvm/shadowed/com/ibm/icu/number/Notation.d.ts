import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CompactNotation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/CompactNotation.d.ts'
import type { ScientificNotation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/ScientificNotation.d.ts'
import type { SimpleNotation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/SimpleNotation.d.ts'
export class Notation extends Object {
    static compactLong(): CompactNotation;
    static compactShort(): CompactNotation;
    static engineering(): ScientificNotation;
    static scientific(): ScientificNotation;
    static simple(): SimpleNotation;
    constructor()
}