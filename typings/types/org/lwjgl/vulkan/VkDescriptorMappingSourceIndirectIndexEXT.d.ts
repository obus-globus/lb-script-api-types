import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSamplerCreateInfo } from '../../../org/lwjgl/vulkan/VkSamplerCreateInfo.d.ts'
export class VkDescriptorMappingSourceIndirectIndexEXT extends Struct<VkDescriptorMappingSourceIndirectIndexEXT> implements NativeResource {
    static ADDRESSOFFSET: number;
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
    static SAMPLERADDRESSOFFSET: number;
    static SAMPLERHEAPARRAYSTRIDE: number;
    static SAMPLERHEAPINDEXSTRIDE: number;
    static SAMPLERHEAPOFFSET: number;
    static SAMPLERPUSHOFFSET: number;
    static SIZEOF: number;
    static USECOMBINEDIMAGESAMPLERINDEX: number;
    static calloc(): VkDescriptorMappingSourceIndirectIndexEXT;
    static calloc(paramarg0: MemoryStack): VkDescriptorMappingSourceIndirectIndexEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorMappingSourceIndirectIndexEXT;
    static create(paramarg0: number): VkDescriptorMappingSourceIndirectIndexEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorMappingSourceIndirectIndexEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorMappingSourceIndirectIndexEXT;
    static malloc(paramarg0: MemoryStack): VkDescriptorMappingSourceIndirectIndexEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naddressOffset(paramarg0: number): number;
    static naddressOffset(paramarg0: number, paramarg1: number): void;
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
    static nsamplerAddressOffset(paramarg0: number): number;
    static nsamplerAddressOffset(paramarg0: number, paramarg1: number): void;
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
    addressOffset(): number;
    addressOffset(arg0: number): VkDescriptorMappingSourceIndirectIndexEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorMappingSourceIndirectIndexEXT;
    heapArrayStride(): number;
    heapArrayStride(arg0: number): VkDescriptorMappingSourceIndirectIndexEXT;
    heapIndexStride(): number;
    heapIndexStride(arg0: number): VkDescriptorMappingSourceIndirectIndexEXT;
    heapOffset(): number;
    heapOffset(arg0: number): VkDescriptorMappingSourceIndirectIndexEXT;
    pEmbeddedSampler(): VkSamplerCreateInfo;
    pEmbeddedSampler(arg0: VkSamplerCreateInfo): VkDescriptorMappingSourceIndirectIndexEXT;
    pushOffset(): number;
    pushOffset(arg0: number): VkDescriptorMappingSourceIndirectIndexEXT;
    samplerAddressOffset(): number;
    samplerAddressOffset(arg0: number): VkDescriptorMappingSourceIndirectIndexEXT;
    samplerHeapArrayStride(): number;
    samplerHeapArrayStride(arg0: number): VkDescriptorMappingSourceIndirectIndexEXT;
    samplerHeapIndexStride(): number;
    samplerHeapIndexStride(arg0: number): VkDescriptorMappingSourceIndirectIndexEXT;
    samplerHeapOffset(): number;
    samplerHeapOffset(arg0: number): VkDescriptorMappingSourceIndirectIndexEXT;
    samplerPushOffset(): number;
    samplerPushOffset(arg0: number): VkDescriptorMappingSourceIndirectIndexEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: VkSamplerCreateInfo, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): VkDescriptorMappingSourceIndirectIndexEXT;
    set(arg0: VkDescriptorMappingSourceIndirectIndexEXT): VkDescriptorMappingSourceIndirectIndexEXT;
    sizeof(): number;
    useCombinedImageSamplerIndex(): boolean;
    useCombinedImageSamplerIndex(arg0: boolean): VkDescriptorMappingSourceIndirectIndexEXT;
}