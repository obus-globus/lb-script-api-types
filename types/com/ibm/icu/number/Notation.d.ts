import type { CompactNotation } from '../../../../com/ibm/icu/number/CompactNotation.d.ts'
import type { ScientificNotation } from '../../../../com/ibm/icu/number/ScientificNotation.d.ts'
import type { SimpleNotation } from '../../../../com/ibm/icu/number/SimpleNotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Notation extends Object {
    static compactLong(): CompactNotation;
    static compactShort(): CompactNotation;
    static engineering(): ScientificNotation;
    static scientific(): ScientificNotation;
    static simple(): SimpleNotation;
    constructor()
}