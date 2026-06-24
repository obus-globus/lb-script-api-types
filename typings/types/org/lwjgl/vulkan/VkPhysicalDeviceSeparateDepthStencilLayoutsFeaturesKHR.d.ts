import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceSeparateDepthStencilLayoutsFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceSeparateDepthStencilLayoutsFeatures.d.ts'
export class VkPhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR extends VkPhysicalDeviceSeparateDepthStencilLayoutsFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEPARATEDEPTHSTENCILLAYOUTS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceSeparateDepthStencilLayoutsFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceSeparateDepthStencilLayoutsFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceSeparateDepthStencilLayoutsFeatures;
    static create(paramarg0: number): VkPhysicalDeviceSeparateDepthStencilLayoutsFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceSeparateDepthStencilLayoutsFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceSeparateDepthStencilLayoutsFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceSeparateDepthStencilLayoutsFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nseparateDepthStencilLayouts(paramarg0: number): number;
    static nseparateDepthStencilLayouts(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR;
    sType$Default(): VkPhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR;
    separateDepthStencilLayouts(): boolean;
    separateDepthStencilLayouts(arg0: boolean): VkPhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR;
    set(arg0: VkPhysicalDeviceSeparateDepthStencilLayoutsFeatures): VkPhysicalDeviceSeparateDepthStencilLayoutsFeatures;
    set(arg0: VkPhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR): VkPhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR;
}