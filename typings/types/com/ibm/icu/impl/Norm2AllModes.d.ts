import type { Norm2AllModes$ComposeNormalizer2 } from '../../../../com/ibm/icu/impl/Norm2AllModes$ComposeNormalizer2.d.ts'
import type { Norm2AllModes$DecomposeNormalizer2 } from '../../../../com/ibm/icu/impl/Norm2AllModes$DecomposeNormalizer2.d.ts'
import type { Norm2AllModes$FCDNormalizer2 } from '../../../../com/ibm/icu/impl/Norm2AllModes$FCDNormalizer2.d.ts'
import type { Norm2AllModes$NoopNormalizer2 } from '../../../../com/ibm/icu/impl/Norm2AllModes$NoopNormalizer2.d.ts'
import type { Norm2AllModes$Normalizer2WithImpl } from '../../../../com/ibm/icu/impl/Norm2AllModes$Normalizer2WithImpl.d.ts'
import type { Normalizer2Impl } from '../../../../com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { Normalizer2 } from '../../../../com/ibm/icu/text/Normalizer2.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Norm2AllModes extends Object {
    static NOOP_NORMALIZER2: Norm2AllModes$NoopNormalizer2;
    static getFCDNormalizer2(): Normalizer2;
    static getInstance(paramarg0: ByteBuffer, paramarg1: string): Norm2AllModes;
    static getN2WithImpl(paramarg0: number): Norm2AllModes$Normalizer2WithImpl;
    static getNFCInstance(): Norm2AllModes;
    static getNFKCInstance(): Norm2AllModes;
    static getNFKC_CFInstance(): Norm2AllModes;
    static getNFKC_SCFInstance(): Norm2AllModes;
    private constructor(arg0: Normalizer2Impl)
    comp: Norm2AllModes$ComposeNormalizer2;
    decomp: Norm2AllModes$DecomposeNormalizer2;
    fcc: Norm2AllModes$ComposeNormalizer2;
    fcd: Norm2AllModes$FCDNormalizer2;
    impl: Normalizer2Impl;
}