import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkComponentMapping } from '../../../org/lwjgl/vulkan/VkComponentMapping.d.ts'
export class VkAndroidHardwareBufferFormatProperties2ANDROID extends Struct<VkAndroidHardwareBufferFormatProperties2ANDROID> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXTERNALFORMAT: number;
    static FORMAT: number;
    static FORMATFEATURES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SAMPLERYCBCRCONVERSIONCOMPONENTS: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUGGESTEDXCHROMAOFFSET: number;
    static SUGGESTEDYCBCRMODEL: number;
    static SUGGESTEDYCBCRRANGE: number;
    static SUGGESTEDYCHROMAOFFSET: number;
    static calloc(): VkAndroidHardwareBufferFormatProperties2ANDROID;
    static calloc(paramarg0: MemoryStack): VkAndroidHardwareBufferFormatProperties2ANDROID;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAndroidHardwareBufferFormatProperties2ANDROID;
    static create(paramarg0: number): VkAndroidHardwareBufferFormatProperties2ANDROID;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAndroidHardwareBufferFormatProperties2ANDROID;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAndroidHardwareBufferFormatProperties2ANDROID;
    static malloc(paramarg0: MemoryStack): VkAndroidHardwareBufferFormatProperties2ANDROID;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nexternalFormat(paramarg0: number): number;
    static nformat(paramarg0: number): number;
    static nformatFeatures(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsamplerYcbcrConversionComponents(paramarg0: number): VkComponentMapping;
    static nsuggestedXChromaOffset(paramarg0: number): number;
    static nsuggestedYChromaOffset(paramarg0: number): number;
    static nsuggestedYcbcrModel(paramarg0: number): number;
    static nsuggestedYcbcrRange(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAndroidHardwareBufferFormatProperties2ANDROID;
    externalFormat(): number;
    format(): number;
    formatFeatures(): number;
    pNext(): number;
    pNext(arg0: number): VkAndroidHardwareBufferFormatProperties2ANDROID;
    sType(): number;
    sType(arg0: number): VkAndroidHardwareBufferFormatProperties2ANDROID;
    sType$Default(): VkAndroidHardwareBufferFormatProperties2ANDROID;
    samplerYcbcrConversionComponents(): VkComponentMapping;
    set(arg0: number, arg1: number): VkAndroidHardwareBufferFormatProperties2ANDROID;
    set(arg0: VkAndroidHardwareBufferFormatProperties2ANDROID): VkAndroidHardwareBufferFormatProperties2ANDROID;
    sizeof(): number;
    suggestedXChromaOffset(): number;
    suggestedYChromaOffset(): number;
    suggestedYcbcrModel(): number;
    suggestedYcbcrRange(): number;
}