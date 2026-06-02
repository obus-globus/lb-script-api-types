import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Norm2AllModes$Normalizer2WithImpl } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Norm2AllModes$Normalizer2WithImpl.d.ts'
import type { Normalizer2Impl } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { Normalizer2Impl$ReorderingBuffer } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Normalizer2Impl$ReorderingBuffer.d.ts'
import type { Normalizer2 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Normalizer2.d.ts'
import type { Normalizer2$Mode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Normalizer2$Mode.d.ts'
export class Norm2AllModes$FCDNormalizer2 extends Norm2AllModes$Normalizer2WithImpl {
    static getInstance(paramdata: InputStream, paramname: string, parammode: Normalizer2$Mode): Normalizer2;
    static getNFCInstance(): Normalizer2;
    static getNFDInstance(): Normalizer2;
    static getNFKCCasefoldInstance(): Normalizer2;
    static getNFKCInstance(): Normalizer2;
    static getNFKCSimpleCasefoldInstance(): Normalizer2;
    static getNFKDInstance(): Normalizer2;
    constructor(ni: Normalizer2Impl)
    getQuickCheck(c: number): number;
    hasBoundaryAfter(c: number): boolean;
    hasBoundaryBefore(c: number): boolean;
    isInert(c: number): boolean;
    normalize(src: CharSequence, buffer: Normalizer2Impl$ReorderingBuffer): void;
    normalizeAndAppend(src: CharSequence, doNormalize: boolean, buffer: Normalizer2Impl$ReorderingBuffer): void;
    spanQuickCheckYes(s: CharSequence): number;
}