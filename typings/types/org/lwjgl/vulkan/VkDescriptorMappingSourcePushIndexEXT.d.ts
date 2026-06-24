import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSamplerCreateInfo } from '../../../org/lwjgl/vulkan/VkSamplerCreateInfo.d.ts'
export class VkDescriptorMappingSourcePushIndexEXT extends Struct<VkDescriptorMappingSourcePushIndexEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HEAPARRAYSTRIDE: number;
    static HEAPINDEXSTRIDE: number;
    static HEAPOFFSET: number;
    static PEMBEDDEDSAMPLER: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PUSHOFFSET: number;
    static SAMPLERHEAPARRAYSTRIDE: number;
    static SAMPLERHEAPINDEXSTRIDE: number;
    static SAMPLERHEAPOFFSET: number;
    static SAMPLERPUSHOFFSET: number;
    static SIZEOF: number;
    static USECOMBINEDIMAGESAMPLERINDEX: number;
    static calloc(): VkDescriptorMappingSourcePushIndexEXT;
    static calloc(paramarg0: MemoryStack): VkDescriptorMappingSourcePushIndexEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorMappingSourcePushIndexEXT;
    static create(paramarg0: number): VkDescriptorMappingSourcePushIndexEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorMappingSourcePushIndexEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorMappingSourcePushIndexEXT;
    static malloc(paramarg0: MemoryStack): VkDescriptorMappingSourcePushIndexEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nheapArrayStride(paramarg0: number): number;
    static nheapArrayStride(paramarg0: number, paramarg1: number): void;
    static nheapIndexStride(paramarg0: number): number;
    static nheapIndexStride(paramarg0: number, paramarg1: number): void;
    static nheapOffset(paramarg0: number): number;
    static nheapOffset(paramarg0: number, paramarg1: number): void;
    static npEmbeddedSampler(paramarg0: number): VkSamplerCreateInfo;
    static npEmbeddedSampler(paramarg0: number, paramarg1: VkSamplerCreateInfo): void;
    static npushOffset(paramarg0: number): number;
    static npushOffset(paramarg0: number, paramarg1: number): void;
    static nsamplerHeapArrayStride(paramarg0: number): number;
    static nsamplerHeapArrayStride(paramarg0: number, paramarg1: number): void;
    static nsamplerHeapIndexStride(paramarg0: number): number;
    static nsamplerHeapIndexStride(paramarg0: number, paramarg1: number): void;
    static nsamplerHeapOffset(paramarg0: number): number;
    static nsamplerHeapOffset(paramarg0: number, paramarg1: number): void;
    static nsamplerPushOffset(paramarg0: number): number;
    static nsamplerPushOffset(paramarg0: number, paramarg1: number): void;
    static nuseCombinedImageSamplerIndex(paramarg0: number): number;
    static nuseCombinedImageSamplerIndex(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorMappingSourcePushIndexEXT;
    heapArrayStride(): number;
    heapArrayStride(arg0: number): VkDescriptorMappingSourcePushIndexEXT;
    heapIndexStride(): number;
    heapIndexStride(arg0: number): VkDescriptorMappingSourcePushIndexEXT;
    heapOffset(): number;
    heapOffset(arg0: number): VkDescriptorMappingSourcePushIndexEXT;
    pEmbeddedSampler(): VkSamplerCreateInfo;
    pEmbeddedSampler(arg0: VkSamplerCreateInfo): VkDescriptorMappingSourcePushIndexEXT;
    pushOffset(): number;
    pushOffset(arg0: number): VkDescriptorMappingSourcePushIndexEXT;
    samplerHeapArrayStride(): number;
    samplerHeapArrayStride(arg0: number): VkDescriptorMappingSourcePushIndexEXT;
    samplerHeapIndexStride(): number;
    samplerHeapIndexStride(arg0: number): VkDescriptorMappingSourcePushIndexEXT;
    samplerHeapOffset(): number;
    samplerHeapOffset(arg0: number): VkDescriptorMappingSourcePushIndexEXT;
    samplerPushOffset(): number;
    samplerPushOffset(arg0: number): VkDescriptorMappingSourcePushIndexEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: VkSamplerCreateInfo, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number): VkDescriptorMappingSourcePushIndexEXT;
    set(arg0: VkDescriptorMappingSourcePushIndexEXT): VkDescriptorMappingSourcePushIndexEXT;
    sizeof(): number;
    useCombinedImageSamplerIndex(): boolean;
    useCombinedImageSamplerIndex(arg0: boolean): VkDescriptorMappingSourcePushIndexEXT;
}