import type { Normalizer2Impl } from '../../../../com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { Normalizer2Impl$ReorderingBuffer } from '../../../../com/ibm/icu/impl/Normalizer2Impl$ReorderingBuffer.d.ts'
import type { Normalizer$QuickCheckResult } from '../../../../com/ibm/icu/text/Normalizer$QuickCheckResult.d.ts'
import type { Normalizer2 } from '../../../../com/ibm/icu/text/Normalizer2.d.ts'
import type { Normalizer2$Mode } from '../../../../com/ibm/icu/text/Normalizer2$Mode.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export abstract class Norm2AllModes$Normalizer2WithImpl extends Normalizer2 {
    static getInstance(paramarg0: InputStream, paramarg1: string, paramarg2: Normalizer2$Mode): Normalizer2;
    static getNFCInstance(): Normalizer2;
    static getNFDInstance(): Normalizer2;
    static getNFKCCasefoldInstance(): Normalizer2;
    static getNFKCInstance(): Normalizer2;
    static getNFKCSimpleCasefoldInstance(): Normalizer2;
    static getNFKDInstance(): Normalizer2;
    constructor(arg0: Normalizer2Impl)
    impl: Normalizer2Impl;
    append(arg0: StringBuilder, arg1: CharSequence): StringBuilder;
    composePair(arg0: number, arg1: number): number;
    getCombiningClass(arg0: number): number;
    getDecomposition(arg0: number): string;
    getQuickCheck(arg0: number): number;
    getRawDecomposition(arg0: number): string;
    isNormalized(arg0: CharSequence): boolean;
    normalize(arg0: CharSequence): string;
    normalize(arg0: CharSequence, arg1: Normalizer2Impl$ReorderingBuffer): void;
    normalize(arg0: CharSequence, arg1: Appendable): Appendable;
    normalize(arg0: CharSequence, arg1: StringBuilder): StringBuilder;
    normalizeAndAppend(arg0: CharSequence, arg1: boolean, arg2: Normalizer2Impl$ReorderingBuffer): void;
    normalizeSecondAndAppend(arg0: StringBuilder, arg1: CharSequence): StringBuilder;
    normalizeSecondAndAppend(arg0: StringBuilder, arg1: CharSequence, arg2: boolean): StringBuilder;
    quickCheck(arg0: CharSequence): Normalizer$QuickCheckResult;
}