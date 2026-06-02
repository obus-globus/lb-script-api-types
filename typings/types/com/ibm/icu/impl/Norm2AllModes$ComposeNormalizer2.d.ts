import type { Norm2AllModes$Normalizer2WithImpl } from '../../../../com/ibm/icu/impl/Norm2AllModes$Normalizer2WithImpl.d.ts'
import type { Normalizer2Impl } from '../../../../com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { Normalizer2Impl$ReorderingBuffer } from '../../../../com/ibm/icu/impl/Normalizer2Impl$ReorderingBuffer.d.ts'
import type { Normalizer$QuickCheckResult } from '../../../../com/ibm/icu/text/Normalizer$QuickCheckResult.d.ts'
import type { Normalizer2 } from '../../../../com/ibm/icu/text/Normalizer2.d.ts'
import type { Normalizer2$Mode } from '../../../../com/ibm/icu/text/Normalizer2$Mode.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Norm2AllModes$ComposeNormalizer2 extends Norm2AllModes$Normalizer2WithImpl {
    static getInstance(paramarg0: InputStream, paramarg1: string, paramarg2: Normalizer2$Mode): Normalizer2;
    static getNFCInstance(): Normalizer2;
    static getNFDInstance(): Normalizer2;
    static getNFKCCasefoldInstance(): Normalizer2;
    static getNFKCInstance(): Normalizer2;
    static getNFKCSimpleCasefoldInstance(): Normalizer2;
    static getNFKDInstance(): Normalizer2;
    constructor(arg0: Normalizer2Impl, arg1: boolean)
    // private onlyContiguous: boolean;
    getQuickCheck(arg0: number): number;
    hasBoundaryAfter(arg0: number): boolean;
    hasBoundaryBefore(arg0: number): boolean;
    isInert(arg0: number): boolean;
    isNormalized(arg0: CharSequence): boolean;
    normalize(arg0: CharSequence, arg1: Normalizer2Impl$ReorderingBuffer): void;
    normalizeAndAppend(arg0: CharSequence, arg1: boolean, arg2: Normalizer2Impl$ReorderingBuffer): void;
    quickCheck(arg0: CharSequence): Normalizer$QuickCheckResult;
    spanQuickCheckYes(arg0: CharSequence): number;
}