import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceDynamicRenderingFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceDynamicRenderingFeatures.d.ts'
export class VkPhysicalDeviceDynamicRenderingFeaturesKHR extends VkPhysicalDeviceDynamicRenderingFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DYNAMICRENDERING: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceDynamicRenderingFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDynamicRenderingFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceDynamicRenderingFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDynamicRenderingFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceDynamicRenderingFeatures;
    static create(paramarg0: number): VkPhysicalDeviceDynamicRenderingFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceDynamicRenderingFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceDynamicRenderingFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceDynamicRenderingFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceDynamicRenderingFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceDynamicRenderingFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDynamicRenderingFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceDynamicRenderingFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDynamicRenderingFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndynamicRendering(paramarg0: number): number;
    static ndynamicRendering(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceDynamicRenderingFeaturesKHR;
    dynamicRendering(): boolean;
    dynamicRendering(arg0: boolean): VkPhysicalDeviceDynamicRenderingFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceDynamicRenderingFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceDynamicRenderingFeaturesKHR;
    sType$Default(): VkPhysicalDeviceDynamicRenderingFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceDynamicRenderingFeaturesKHR;
    set(arg0: VkPhysicalDeviceDynamicRenderingFeatures): VkPhysicalDeviceDynamicRenderingFeatures;
    set(arg0: VkPhysicalDeviceDynamicRenderingFeaturesKHR): VkPhysicalDeviceDynamicRenderingFeaturesKHR;
}