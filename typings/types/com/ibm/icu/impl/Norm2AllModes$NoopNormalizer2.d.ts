import type { Normalizer$QuickCheckResult } from '../../../../com/ibm/icu/text/Normalizer$QuickCheckResult.d.ts'
import type { Normalizer2 } from '../../../../com/ibm/icu/text/Normalizer2.d.ts'
import type { Normalizer2$Mode } from '../../../../com/ibm/icu/text/Normalizer2$Mode.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Norm2AllModes$NoopNormalizer2 extends Normalizer2 {
    static getInstance(paramarg0: InputStream, paramarg1: string, paramarg2: Normalizer2$Mode): Normalizer2;
    static getNFCInstance(): Normalizer2;
    static getNFDInstance(): Normalizer2;
    static getNFKCCasefoldInstance(): Normalizer2;
    static getNFKCInstance(): Normalizer2;
    static getNFKCSimpleCasefoldInstance(): Normalizer2;
    static getNFKDInstance(): Normalizer2;
    constructor()
    append(arg0: StringBuilder, arg1: CharSequence): StringBuilder;
    getDecomposition(arg0: number): string;
    hasBoundaryAfter(arg0: number): boolean;
    hasBoundaryBefore(arg0: number): boolean;
    isInert(arg0: number): boolean;
    isNormalized(arg0: CharSequence): boolean;
    normalize(arg0: CharSequence, arg1: Appendable): Appendable;
    normalize(arg0: CharSequence, arg1: StringBuilder): StringBuilder;
    normalizeSecondAndAppend(arg0: StringBuilder, arg1: CharSequence): StringBuilder;
    quickCheck(arg0: CharSequence): Normalizer$QuickCheckResult;
    spanQuickCheckYes(arg0: CharSequence): number;
}