import type { Normalizer$QuickCheckResult } from '../../../../com/ibm/icu/text/Normalizer$QuickCheckResult.d.ts'
import type { Normalizer2 } from '../../../../com/ibm/icu/text/Normalizer2.d.ts'
import type { Normalizer2$Mode } from '../../../../com/ibm/icu/text/Normalizer2$Mode.d.ts'
import type { UnicodeSet$SpanCondition } from '../../../../com/ibm/icu/text/UnicodeSet$SpanCondition.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class FilteredNormalizer2 extends Normalizer2 {
    static getInstance(paramarg0: InputStream, paramarg1: string, paramarg2: Normalizer2$Mode): Normalizer2;
    static getNFCInstance(): Normalizer2;
    static getNFDInstance(): Normalizer2;
    static getNFKCCasefoldInstance(): Normalizer2;
    static getNFKCInstance(): Normalizer2;
    static getNFKCSimpleCasefoldInstance(): Normalizer2;
    static getNFKDInstance(): Normalizer2;
    constructor(arg0: Normalizer2, arg1: string[])
    // private norm2: Normalizer2;
    // private set: string[];
    append(arg0: StringBuilder, arg1: CharSequence): StringBuilder;
    composePair(arg0: number, arg1: number): number;
    getCombiningClass(arg0: number): number;
    getDecomposition(arg0: number): string;
    getRawDecomposition(arg0: number): string;
    hasBoundaryAfter(arg0: number): boolean;
    hasBoundaryBefore(arg0: number): boolean;
    isInert(arg0: number): boolean;
    isNormalized(arg0: CharSequence): boolean;
    normalize(arg0: CharSequence): string;
    normalize(arg0: CharSequence, arg1: Appendable): Appendable;
    // private normalize(arg0: CharSequence, arg1: Appendable, arg2: UnicodeSet$SpanCondition): Appendable;
    normalize(arg0: CharSequence, arg1: StringBuilder): StringBuilder;
    normalizeSecondAndAppend(arg0: StringBuilder, arg1: CharSequence): StringBuilder;
    // private normalizeSecondAndAppend(arg0: StringBuilder, arg1: CharSequence, arg2: boolean): StringBuilder;
    quickCheck(arg0: CharSequence): Normalizer$QuickCheckResult;
    spanQuickCheckYes(arg0: CharSequence): number;
}