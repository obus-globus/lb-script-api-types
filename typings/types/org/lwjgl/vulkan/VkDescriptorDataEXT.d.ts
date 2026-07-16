import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDescriptorAddressInfoEXT } from '../../../org/lwjgl/vulkan/VkDescriptorAddressInfoEXT.d.ts'
import type { VkDescriptorImageInfo } from '../../../org/lwjgl/vulkan/VkDescriptorImageInfo.d.ts'
export class VkDescriptorDataEXT extends Struct<VkDescriptorDataEXT> implements NativeResource {
    static ACCELERATIONSTRUCTURE: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PCOMBINEDIMAGESAMPLER: number;
    static PINPUTATTACHMENTIMAGE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSAMPLEDIMAGE: number;
    static PSAMPLER: number;
    static PSTORAGEBUFFER: number;
    static PSTORAGEIMAGE: number;
    static PSTORAGETEXELBUFFER: number;
    static PUNIFORMBUFFER: number;
    static PUNIFORMTEXELBUFFER: number;
    static SIZEOF: number;
    static calloc(): VkDescriptorDataEXT;
    static calloc(paramarg0: MemoryStack): VkDescriptorDataEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorDataEXT;
    static create(paramarg0: number): VkDescriptorDataEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorDataEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorDataEXT;
    static malloc(paramarg0: MemoryStack): VkDescriptorDataEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naccelerationStructure(paramarg0: number): number;
    static naccelerationStructure(paramarg0: number, paramarg1: number): void;
    static npCombinedImageSampler(paramarg0: number): VkDescriptorImageInfo;
    static npCombinedImageSampler(paramarg0: number, paramarg1: VkDescriptorImageInfo): void;
    static npInputAttachmentImage(paramarg0: number): VkDescriptorImageInfo;
    static npInputAttachmentImage(paramarg0: number, paramarg1: VkDescriptorImageInfo): void;
    static npSampledImage(paramarg0: number): VkDescriptorImageInfo;
    static npSampledImage(paramarg0: number, paramarg1: VkDescriptorImageInfo): void;
    static npSampler(paramarg0: number, paramarg1: number): LongBuffer;
    static npSampler(paramarg0: number, paramarg1: LongBuffer): void;
    static npStorageBuffer(paramarg0: number): VkDescriptorAddressInfoEXT;
    static npStorageBuffer(paramarg0: number, paramarg1: VkDescriptorAddressInfoEXT): void;
    static npStorageImage(paramarg0: number): VkDescriptorImageInfo;
    static npStorageImage(paramarg0: number, paramarg1: VkDescriptorImageInfo): void;
    static npStorageTexelBuffer(paramarg0: number): VkDescriptorAddressInfoEXT;
    static npStorageTexelBuffer(paramarg0: number, paramarg1: VkDescriptorAddressInfoEXT): void;
    static npUniformBuffer(paramarg0: number): VkDescriptorAddressInfoEXT;
    static npUniformBuffer(paramarg0: number, paramarg1: VkDescriptorAddressInfoEXT): void;
    static npUniformTexelBuffer(paramarg0: number): VkDescriptorAddressInfoEXT;
    static npUniformTexelBuffer(paramarg0: number, paramarg1: VkDescriptorAddressInfoEXT): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    accelerationStructure(): number;
    accelerationStructure(arg0: number): VkDescriptorDataEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorDataEXT;
    pCombinedImageSampler(): VkDescriptorImageInfo;
    pCombinedImageSampler(arg0: VkDescriptorImageInfo): VkDescriptorDataEXT;
    pInputAttachmentImage(): VkDescriptorImageInfo;
    pInputAttachmentImage(arg0: VkDescriptorImageInfo): VkDescriptorDataEXT;
    pSampledImage(): VkDescriptorImageInfo;
    pSampledImage(arg0: VkDescriptorImageInfo): VkDescriptorDataEXT;
    pSampler(arg0: LongBuffer): VkDescriptorDataEXT;
    pSampler(arg0: number): LongBuffer;
    pStorageBuffer(): VkDescriptorAddressInfoEXT;
    pStorageBuffer(arg0: VkDescriptorAddressInfoEXT): VkDescriptorDataEXT;
    pStorageImage(): VkDescriptorImageInfo;
    pStorageImage(arg0: VkDescriptorImageInfo): VkDescriptorDataEXT;
    pStorageTexelBuffer(): VkDescriptorAddressInfoEXT;
    pStorageTexelBuffer(arg0: VkDescriptorAddressInfoEXT): VkDescriptorDataEXT;
    pUniformBuffer(): VkDescriptorAddressInfoEXT;
    pUniformBuffer(arg0: VkDescriptorAddressInfoEXT): VkDescriptorDataEXT;
    pUniformTexelBuffer(): VkDescriptorAddressInfoEXT;
    pUniformTexelBuffer(arg0: VkDescriptorAddressInfoEXT): VkDescriptorDataEXT;
    set(arg0: VkDescriptorDataEXT): VkDescriptorDataEXT;
    sizeof(): number;
}