import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UnicodeSet$Filter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeSet$Filter.d.ts'
export class UnicodeSet$NumericValueFilter extends Object implements UnicodeSet$Filter {
    constructor(value: number)
    // private value: number;
    contains(ch: number): boolean;
}