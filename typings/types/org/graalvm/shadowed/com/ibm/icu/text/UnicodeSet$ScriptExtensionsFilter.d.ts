import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UnicodeSet$Filter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeSet$Filter.d.ts'
export class UnicodeSet$ScriptExtensionsFilter extends Object implements UnicodeSet$Filter {
    constructor(script: number)
    // private script: number;
    contains(c: number): boolean;
}