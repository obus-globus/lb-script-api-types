import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
import type { UnicodeMatcher } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeMatcher.d.ts'
export abstract class UnicodeFilter extends Object implements UnicodeMatcher {
    static ETHER: string;
    static U_MATCH: number;
    static U_MISMATCH: number;
    static U_PARTIAL_MATCH: number;
    constructor()
    contains(c: number): boolean;
    matches(text: Replaceable, offset: number[], limit: number, incremental: boolean): number;
    matchesIndexValue(v: number): boolean;
    toPattern(escapeUnprintable: boolean): string;
}