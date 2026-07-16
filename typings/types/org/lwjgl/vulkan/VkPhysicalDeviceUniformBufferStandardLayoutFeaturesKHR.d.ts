import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceUniformBufferStandardLayoutFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceUniformBufferStandardLayoutFeatures.d.ts'
export class VkPhysicalDeviceUniformBufferStandardLayoutFeaturesKHR extends VkPhysicalDeviceUniformBufferStandardLayoutFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static UNIFORMBUFFERSTANDARDLAYOUT: number;
    static calloc(): VkPhysicalDeviceUniformBufferStandardLayoutFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceUniformBufferStandardLayoutFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceUniformBufferStandardLayoutFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceUniformBufferStandardLayoutFeaturesKHR;
    static create(): VkPhysicalDeviceUniformBufferStandardLayoutFeatures;
    static create(paramarg0: number): VkPhysicalDeviceUniformBufferStandardLayoutFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceUniformBufferStandardLayoutFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceUniformBufferStandardLayoutFeaturesKHR;
    static createSafe(paramarg0: number): VkPhysicalDeviceUniformBufferStandardLayoutFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceUniformBufferStandardLayoutFeaturesKHR;
    static malloc(): VkPhysicalDeviceUniformBufferStandardLayoutFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceUniformBufferStandardLayoutFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceUniformBufferStandardLayoutFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceUniformBufferStandardLayoutFeaturesKHR;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nuniformBufferStandardLayout(paramarg0: number): number;
    static nuniformBufferStandardLayout(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceUniformBufferStandardLayoutFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceUniformBufferStandardLayoutFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceUniformBufferStandardLayoutFeaturesKHR;
    sType$Default(): VkPhysicalDeviceUniformBufferStandardLayoutFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceUniformBufferStandardLayoutFeaturesKHR;
    set(arg0: VkPhysicalDeviceUniformBufferStandardLayoutFeatures): VkPhysicalDeviceUniformBufferStandardLayoutFeatures;
    set(arg0: VkPhysicalDeviceUniformBufferStandardLayoutFeaturesKHR): VkPhysicalDeviceUniformBufferStandardLayoutFeaturesKHR;
    uniformBufferStandardLayout(): boolean;
    uniformBufferStandardLayout(arg0: boolean): VkPhysicalDeviceUniformBufferStandardLayoutFeaturesKHR;
}