import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Normalizer2Impl } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { Normalizer2Impl$ReorderingBuffer } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Normalizer2Impl$ReorderingBuffer.d.ts'
import type { Normalizer$QuickCheckResult } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Normalizer$QuickCheckResult.d.ts'
import type { Normalizer2 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Normalizer2.d.ts'
import type { Normalizer2$Mode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Normalizer2$Mode.d.ts'
export abstract class Norm2AllModes$Normalizer2WithImpl extends Normalizer2 {
    static getInstance(paramdata: InputStream, paramname: string, parammode: Normalizer2$Mode): Normalizer2;
    static getNFCInstance(): Normalizer2;
    static getNFDInstance(): Normalizer2;
    static getNFKCCasefoldInstance(): Normalizer2;
    static getNFKCInstance(): Normalizer2;
    static getNFKCSimpleCasefoldInstance(): Normalizer2;
    static getNFKDInstance(): Normalizer2;
    constructor(ni: Normalizer2Impl)
    impl: Normalizer2Impl;
    append(first: StringBuilder, second: CharSequence): StringBuilder;
    composePair(a: number, b: number): number;
    getCombiningClass(c: number): number;
    getDecomposition(c: number): string;
    getQuickCheck(c: number): number;
    getRawDecomposition(c: number): string;
    isNormalized(s: CharSequence): boolean;
    normalize(src: CharSequence, dest: Appendable): Appendable;
    normalize(src: CharSequence, dest: StringBuilder): StringBuilder;
    normalize(src: CharSequence, buffer: Normalizer2Impl$ReorderingBuffer): void;
    normalizeAndAppend(src: CharSequence, doNormalize: boolean, buffer: Normalizer2Impl$ReorderingBuffer): void;
    normalizeSecondAndAppend(first: StringBuilder, second: CharSequence): StringBuilder;
    normalizeSecondAndAppend(first: StringBuilder, second: CharSequence, doNormalize: boolean): StringBuilder;
    quickCheck(s: CharSequence): Normalizer$QuickCheckResult;
}