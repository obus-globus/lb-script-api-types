import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UnicodeSet$Filter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeSet$Filter.d.ts'
export class UnicodeSet$IdentifierTypeFilter extends Object implements UnicodeSet$Filter {
    constructor(idType: number)
    // private idType: number;
    contains(c: number): boolean;
}