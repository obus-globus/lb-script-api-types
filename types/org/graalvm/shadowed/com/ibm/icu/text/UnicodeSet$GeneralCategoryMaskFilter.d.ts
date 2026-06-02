import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UnicodeSet$Filter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeSet$Filter.d.ts'
export class UnicodeSet$GeneralCategoryMaskFilter extends Object implements UnicodeSet$Filter {
    constructor(mask: number)
    // private mask: number;
    contains(ch: number): boolean;
}