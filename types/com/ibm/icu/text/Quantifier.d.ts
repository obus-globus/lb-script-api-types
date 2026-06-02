import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { UnicodeMatcher } from '../../../../com/ibm/icu/text/UnicodeMatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Quantifier extends Object implements UnicodeMatcher {
    static ETHER: string;
    static MAX: number;
    static U_MATCH: number;
    static U_MISMATCH: number;
    static U_PARTIAL_MATCH: number;
    constructor(arg0: UnicodeMatcher, arg1: number, arg2: number)
    // private matcher: UnicodeMatcher;
    // private maxCount: number;
    // private minCount: number;
    addMatchSetTo(arg0: string[]): void;
    matches(arg0: Replaceable, arg1: number[], arg2: number, arg3: boolean): number;
    matchesIndexValue(arg0: number): boolean;
    toPattern(arg0: boolean): string;
}