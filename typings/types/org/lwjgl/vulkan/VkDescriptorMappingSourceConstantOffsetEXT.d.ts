import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSamplerCreateInfo } from '../../../org/lwjgl/vulkan/VkSamplerCreateInfo.d.ts'
export class VkDescriptorMappingSourceConstantOffsetEXT extends Struct<VkDescriptorMappingSourceConstantOffsetEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HEAPARRAYSTRIDE: number;
    static HEAPOFFSET: number;
    static PEMBEDDEDSAMPLER: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SAMPLERHEAPARRAYSTRIDE: number;
    static SAMPLERHEAPOFFSET: number;
    static SIZEOF: number;
    static calloc(): VkDescriptorMappingSourceConstantOffsetEXT;
    static calloc(paramarg0: MemoryStack): VkDescriptorMappingSourceConstantOffsetEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorMappingSourceConstantOffsetEXT;
    static create(paramarg0: number): VkDescriptorMappingSourceConstantOffsetEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorMappingSourceConstantOffsetEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorMappingSourceConstantOffsetEXT;
    static malloc(paramarg0: MemoryStack): VkDescriptorMappingSourceConstantOffsetEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nheapArrayStride(paramarg0: number): number;
    static nheapArrayStride(paramarg0: number, paramarg1: number): void;
    static nheapOffset(paramarg0: number): number;
    static nheapOffset(paramarg0: number, paramarg1: number): void;
    static npEmbeddedSampler(paramarg0: number): VkSamplerCreateInfo;
    static npEmbeddedSampler(paramarg0: number, paramarg1: VkSamplerCreateInfo): void;
    static nsamplerHeapArrayStride(paramarg0: number): number;
    static nsamplerHeapArrayStride(paramarg0: number, paramarg1: number): void;
    static nsamplerHeapOffset(paramarg0: number): number;
    static nsamplerHeapOffset(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorMappingSourceConstantOffsetEXT;
    heapArrayStride(): number;
    heapArrayStride(arg0: number): VkDescriptorMappingSourceConstantOffsetEXT;
    heapOffset(): number;
    heapOffset(arg0: number): VkDescriptorMappingSourceConstantOffsetEXT;
    pEmbeddedSampler(): VkSamplerCreateInfo;
    pEmbeddedSampler(arg0: VkSamplerCreateInfo): VkDescriptorMappingSourceConstantOffsetEXT;
    samplerHeapArrayStride(): number;
    samplerHeapArrayStride(arg0: number): VkDescriptorMappingSourceConstantOffsetEXT;
    samplerHeapOffset(): number;
    samplerHeapOffset(arg0: number): VkDescriptorMappingSourceConstantOffsetEXT;
    set(arg0: number, arg1: number, arg2: VkSamplerCreateInfo, arg3: number, arg4: number): VkDescriptorMappingSourceConstantOffsetEXT;
    set(arg0: VkDescriptorMappingSourceConstantOffsetEXT): VkDescriptorMappingSourceConstantOffsetEXT;
    sizeof(): number;
}