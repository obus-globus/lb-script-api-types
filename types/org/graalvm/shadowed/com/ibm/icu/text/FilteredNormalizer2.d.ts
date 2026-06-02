import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Normalizer$QuickCheckResult } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Normalizer$QuickCheckResult.d.ts'
import type { Normalizer2 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Normalizer2.d.ts'
import type { Normalizer2$Mode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Normalizer2$Mode.d.ts'
import type { UnicodeSet$SpanCondition } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeSet$SpanCondition.d.ts'
export class FilteredNormalizer2 extends Normalizer2 {
    static getInstance(paramdata: InputStream, paramname: string, parammode: Normalizer2$Mode): Normalizer2;
    static getNFCInstance(): Normalizer2;
    static getNFDInstance(): Normalizer2;
    static getNFKCCasefoldInstance(): Normalizer2;
    static getNFKCInstance(): Normalizer2;
    static getNFKCSimpleCasefoldInstance(): Normalizer2;
    static getNFKDInstance(): Normalizer2;
    constructor(n2: Normalizer2, filterSet: string[])
    // private norm2: Normalizer2;
    // private set: string[];
    append(first: StringBuilder, second: CharSequence): StringBuilder;
    composePair(a: number, b: number): number;
    getCombiningClass(c: number): number;
    getDecomposition(c: number): string;
    getRawDecomposition(c: number): string;
    hasBoundaryAfter(c: number): boolean;
    hasBoundaryBefore(c: number): boolean;
    isInert(c: number): boolean;
    isNormalized(s: CharSequence): boolean;
    normalize(src: CharSequence, dest: Appendable): Appendable;
    // private normalize(src: CharSequence, dest: Appendable, spanCondition: UnicodeSet$SpanCondition): Appendable;
    normalize(src: CharSequence, dest: StringBuilder): StringBuilder;
    normalizeSecondAndAppend(first: StringBuilder, second: CharSequence): StringBuilder;
    // private normalizeSecondAndAppend(first: StringBuilder, second: CharSequence, doNormalize: boolean): StringBuilder;
    quickCheck(s: CharSequence): Normalizer$QuickCheckResult;
    spanQuickCheckYes(s: CharSequence): number;
}