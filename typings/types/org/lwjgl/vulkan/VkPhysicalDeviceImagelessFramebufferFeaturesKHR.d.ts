import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceImagelessFramebufferFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceImagelessFramebufferFeatures.d.ts'
export class VkPhysicalDeviceImagelessFramebufferFeaturesKHR extends VkPhysicalDeviceImagelessFramebufferFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGELESSFRAMEBUFFER: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceImagelessFramebufferFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceImagelessFramebufferFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceImagelessFramebufferFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceImagelessFramebufferFeaturesKHR;
    static create(): VkPhysicalDeviceImagelessFramebufferFeatures;
    static create(paramarg0: number): VkPhysicalDeviceImagelessFramebufferFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceImagelessFramebufferFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceImagelessFramebufferFeaturesKHR;
    static createSafe(paramarg0: number): VkPhysicalDeviceImagelessFramebufferFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceImagelessFramebufferFeaturesKHR;
    static malloc(): VkPhysicalDeviceImagelessFramebufferFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceImagelessFramebufferFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceImagelessFramebufferFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceImagelessFramebufferFeaturesKHR;
    static nimagelessFramebuffer(paramarg0: number): number;
    static nimagelessFramebuffer(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceImagelessFramebufferFeaturesKHR;
    imagelessFramebuffer(): boolean;
    imagelessFramebuffer(arg0: boolean): VkPhysicalDeviceImagelessFramebufferFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceImagelessFramebufferFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceImagelessFramebufferFeaturesKHR;
    sType$Default(): VkPhysicalDeviceImagelessFramebufferFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceImagelessFramebufferFeaturesKHR;
    set(arg0: VkPhysicalDeviceImagelessFramebufferFeatures): VkPhysicalDeviceImagelessFramebufferFeatures;
    set(arg0: VkPhysicalDeviceImagelessFramebufferFeaturesKHR): VkPhysicalDeviceImagelessFramebufferFeaturesKHR;
}