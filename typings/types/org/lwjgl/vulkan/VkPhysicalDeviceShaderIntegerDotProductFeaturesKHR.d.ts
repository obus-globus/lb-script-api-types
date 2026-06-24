import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceShaderIntegerDotProductFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceShaderIntegerDotProductFeatures.d.ts'
export class VkPhysicalDeviceShaderIntegerDotProductFeaturesKHR extends VkPhysicalDeviceShaderIntegerDotProductFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERINTEGERDOTPRODUCT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShaderIntegerDotProductFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderIntegerDotProductFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceShaderIntegerDotProductFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderIntegerDotProductFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceShaderIntegerDotProductFeatures;
    static create(paramarg0: number): VkPhysicalDeviceShaderIntegerDotProductFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceShaderIntegerDotProductFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceShaderIntegerDotProductFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderIntegerDotProductFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderIntegerDotProductFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderIntegerDotProductFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderIntegerDotProductFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderIntegerDotProductFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderIntegerDotProductFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderIntegerDotProduct(paramarg0: number): number;
    static nshaderIntegerDotProduct(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderIntegerDotProductFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderIntegerDotProductFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderIntegerDotProductFeaturesKHR;
    sType$Default(): VkPhysicalDeviceShaderIntegerDotProductFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceShaderIntegerDotProductFeaturesKHR;
    set(arg0: VkPhysicalDeviceShaderIntegerDotProductFeatures): VkPhysicalDeviceShaderIntegerDotProductFeatures;
    set(arg0: VkPhysicalDeviceShaderIntegerDotProductFeaturesKHR): VkPhysicalDeviceShaderIntegerDotProductFeaturesKHR;
    shaderIntegerDotProduct(): boolean;
    shaderIntegerDotProduct(arg0: boolean): VkPhysicalDeviceShaderIntegerDotProductFeaturesKHR;
}