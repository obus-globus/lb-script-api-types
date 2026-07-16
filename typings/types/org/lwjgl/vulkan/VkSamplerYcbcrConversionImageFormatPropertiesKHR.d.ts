import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSamplerYcbcrConversionImageFormatProperties } from '../../../org/lwjgl/vulkan/VkSamplerYcbcrConversionImageFormatProperties.d.ts'
export class VkSamplerYcbcrConversionImageFormatPropertiesKHR extends VkSamplerYcbcrConversionImageFormatProperties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMBINEDIMAGESAMPLERDESCRIPTORCOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSamplerYcbcrConversionImageFormatProperties;
    static calloc(paramarg0: MemoryStack): VkSamplerYcbcrConversionImageFormatProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkSamplerYcbcrConversionImageFormatPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkSamplerYcbcrConversionImageFormatPropertiesKHR;
    static create(): VkSamplerYcbcrConversionImageFormatProperties;
    static create(paramarg0: number): VkSamplerYcbcrConversionImageFormatProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkSamplerYcbcrConversionImageFormatPropertiesKHR;
    static create(paramarg0: number): VkSamplerYcbcrConversionImageFormatPropertiesKHR;
    static createSafe(paramarg0: number): VkSamplerYcbcrConversionImageFormatProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSamplerYcbcrConversionImageFormatPropertiesKHR;
    static malloc(): VkSamplerYcbcrConversionImageFormatProperties;
    static malloc(paramarg0: MemoryStack): VkSamplerYcbcrConversionImageFormatProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkSamplerYcbcrConversionImageFormatPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkSamplerYcbcrConversionImageFormatPropertiesKHR;
    static ncombinedImageSamplerDescriptorCount(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkSamplerYcbcrConversionImageFormatPropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkSamplerYcbcrConversionImageFormatPropertiesKHR;
    sType(): number;
    sType(arg0: number): VkSamplerYcbcrConversionImageFormatPropertiesKHR;
    sType$Default(): VkSamplerYcbcrConversionImageFormatPropertiesKHR;
    set(arg0: number, arg1: number): VkSamplerYcbcrConversionImageFormatPropertiesKHR;
    set(arg0: VkSamplerYcbcrConversionImageFormatProperties): VkSamplerYcbcrConversionImageFormatProperties;
    set(arg0: VkSamplerYcbcrConversionImageFormatPropertiesKHR): VkSamplerYcbcrConversionImageFormatPropertiesKHR;
}