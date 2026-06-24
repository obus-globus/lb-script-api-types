import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkFramebufferMixedSamplesCombinationNV extends Struct<VkFramebufferMixedSamplesCombinationNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLORSAMPLES: number;
    static COVERAGEREDUCTIONMODE: number;
    static DEPTHSTENCILSAMPLES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RASTERIZATIONSAMPLES: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkFramebufferMixedSamplesCombinationNV;
    static calloc(paramarg0: MemoryStack): VkFramebufferMixedSamplesCombinationNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkFramebufferMixedSamplesCombinationNV;
    static create(paramarg0: number): VkFramebufferMixedSamplesCombinationNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkFramebufferMixedSamplesCombinationNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkFramebufferMixedSamplesCombinationNV;
    static malloc(paramarg0: MemoryStack): VkFramebufferMixedSamplesCombinationNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncolorSamples(paramarg0: number): number;
    static ncoverageReductionMode(paramarg0: number): number;
    static ndepthStencilSamples(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrasterizationSamples(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    colorSamples(): number;
    coverageReductionMode(): number;
    create(arg0: number, arg1: ByteBuffer): VkFramebufferMixedSamplesCombinationNV;
    depthStencilSamples(): number;
    pNext(): number;
    pNext(arg0: number): VkFramebufferMixedSamplesCombinationNV;
    rasterizationSamples(): number;
    sType(): number;
    sType(arg0: number): VkFramebufferMixedSamplesCombinationNV;
    sType$Default(): VkFramebufferMixedSamplesCombinationNV;
    set(arg0: number, arg1: number): VkFramebufferMixedSamplesCombinationNV;
    set(arg0: VkFramebufferMixedSamplesCombinationNV): VkFramebufferMixedSamplesCombinationNV;
    sizeof(): number;
}