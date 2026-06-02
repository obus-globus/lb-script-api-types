import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { UnicodeMatcher } from '../../../../com/ibm/icu/text/UnicodeMatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class UnicodeFilter extends Object implements UnicodeMatcher {
    static ETHER: string;
    static U_MATCH: number;
    static U_MISMATCH: number;
    static U_PARTIAL_MATCH: number;
    constructor()
    contains(arg0: number): boolean;
    matches(arg0: Replaceable, arg1: number[], arg2: number, arg3: boolean): number;
}