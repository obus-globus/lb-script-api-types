import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
import type { UnicodeMatcher } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeMatcher.d.ts'
export class Quantifier extends Object implements UnicodeMatcher {
    static ETHER: string;
    static MAX: number;
    static U_MATCH: number;
    static U_MISMATCH: number;
    static U_PARTIAL_MATCH: number;
    constructor(theMatcher: UnicodeMatcher, theMinCount: number, theMaxCount: number)
    // private matcher: UnicodeMatcher;
    // private maxCount: number;
    // private minCount: number;
    addMatchSetTo(toUnionTo: string[]): void;
    matches(text: Replaceable, offset: number[], limit: number, incremental: boolean): number;
    matchesIndexValue(v: number): boolean;
    toPattern(escapeUnprintable: boolean): string;
}