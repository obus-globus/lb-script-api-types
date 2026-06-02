import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UnicodeSet$Filter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeSet$Filter.d.ts'
export class UnicodeSet$IntPropertyFilter extends Object implements UnicodeSet$Filter {
    constructor(prop: number, value: number)
    // private prop: number;
    // private value: number;
    contains(ch: number): boolean;
}