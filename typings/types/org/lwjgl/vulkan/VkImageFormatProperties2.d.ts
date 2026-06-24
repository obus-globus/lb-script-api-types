import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAndroidHardwareBufferUsageANDROID } from '../../../org/lwjgl/vulkan/VkAndroidHardwareBufferUsageANDROID.d.ts'
import type { VkExternalImageFormatProperties } from '../../../org/lwjgl/vulkan/VkExternalImageFormatProperties.d.ts'
import type { VkExternalImageFormatPropertiesKHR } from '../../../org/lwjgl/vulkan/VkExternalImageFormatPropertiesKHR.d.ts'
import type { VkFilterCubicImageViewImageFormatPropertiesEXT } from '../../../org/lwjgl/vulkan/VkFilterCubicImageViewImageFormatPropertiesEXT.d.ts'
import type { VkHostImageCopyDevicePerformanceQuery } from '../../../org/lwjgl/vulkan/VkHostImageCopyDevicePerformanceQuery.d.ts'
import type { VkHostImageCopyDevicePerformanceQueryEXT } from '../../../org/lwjgl/vulkan/VkHostImageCopyDevicePerformanceQueryEXT.d.ts'
import type { VkImageCompressionPropertiesEXT } from '../../../org/lwjgl/vulkan/VkImageCompressionPropertiesEXT.d.ts'
import type { VkImageFormatProperties } from '../../../org/lwjgl/vulkan/VkImageFormatProperties.d.ts'
import type { VkSamplerYcbcrConversionImageFormatProperties } from '../../../org/lwjgl/vulkan/VkSamplerYcbcrConversionImageFormatProperties.d.ts'
import type { VkSamplerYcbcrConversionImageFormatPropertiesKHR } from '../../../org/lwjgl/vulkan/VkSamplerYcbcrConversionImageFormatPropertiesKHR.d.ts'
import type { VkSubsampledImageFormatPropertiesEXT } from '../../../org/lwjgl/vulkan/VkSubsampledImageFormatPropertiesEXT.d.ts'
import type { VkTextureLODGatherFormatPropertiesAMD } from '../../../org/lwjgl/vulkan/VkTextureLODGatherFormatPropertiesAMD.d.ts'
export class VkImageFormatProperties2 extends Struct<VkImageFormatProperties2> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGEFORMATPROPERTIES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkImageFormatProperties2;
    static calloc(paramarg0: MemoryStack): VkImageFormatProperties2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageFormatProperties2;
    static create(paramarg0: number): VkImageFormatProperties2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageFormatProperties2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageFormatProperties2;
    static malloc(paramarg0: MemoryStack): VkImageFormatProperties2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nimageFormatProperties(paramarg0: number): VkImageFormatProperties;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkImageFormatProperties2;
    imageFormatProperties(): VkImageFormatProperties;
    pNext(): number;
    pNext(arg0: number): VkImageFormatProperties2;
    pNext(arg0: VkAndroidHardwareBufferUsageANDROID): VkImageFormatProperties2;
    pNext(arg0: VkExternalImageFormatProperties): VkImageFormatProperties2;
    pNext(arg0: VkExternalImageFormatPropertiesKHR): VkImageFormatProperties2;
    pNext(arg0: VkFilterCubicImageViewImageFormatPropertiesEXT): VkImageFormatProperties2;
    pNext(arg0: VkHostImageCopyDevicePerformanceQuery): VkImageFormatProperties2;
    pNext(arg0: VkHostImageCopyDevicePerformanceQueryEXT): VkImageFormatProperties2;
    pNext(arg0: VkImageCompressionPropertiesEXT): VkImageFormatProperties2;
    pNext(arg0: VkSamplerYcbcrConversionImageFormatProperties): VkImageFormatProperties2;
    pNext(arg0: VkSamplerYcbcrConversionImageFormatPropertiesKHR): VkImageFormatProperties2;
    pNext(arg0: VkSubsampledImageFormatPropertiesEXT): VkImageFormatProperties2;
    pNext(arg0: VkTextureLODGatherFormatPropertiesAMD): VkImageFormatProperties2;
    sType(): number;
    sType(arg0: number): VkImageFormatProperties2;
    sType$Default(): VkImageFormatProperties2;
    set(arg0: number, arg1: number): VkImageFormatProperties2;
    set(arg0: VkImageFormatProperties2): VkImageFormatProperties2;
    sizeof(): number;
}