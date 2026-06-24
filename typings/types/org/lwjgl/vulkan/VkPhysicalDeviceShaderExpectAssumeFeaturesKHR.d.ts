import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceShaderExpectAssumeFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceShaderExpectAssumeFeatures.d.ts'
export class VkPhysicalDeviceShaderExpectAssumeFeaturesKHR extends VkPhysicalDeviceShaderExpectAssumeFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADEREXPECTASSUME: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShaderExpectAssumeFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderExpectAssumeFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceShaderExpectAssumeFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderExpectAssumeFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceShaderExpectAssumeFeatures;
    static create(paramarg0: number): VkPhysicalDeviceShaderExpectAssumeFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceShaderExpectAssumeFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceShaderExpectAssumeFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderExpectAssumeFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderExpectAssumeFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderExpectAssumeFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderExpectAssumeFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderExpectAssumeFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderExpectAssumeFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderExpectAssume(paramarg0: number): number;
    static nshaderExpectAssume(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderExpectAssumeFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderExpectAssumeFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderExpectAssumeFeaturesKHR;
    sType$Default(): VkPhysicalDeviceShaderExpectAssumeFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceShaderExpectAssumeFeaturesKHR;
    set(arg0: VkPhysicalDeviceShaderExpectAssumeFeatures): VkPhysicalDeviceShaderExpectAssumeFeatures;
    set(arg0: VkPhysicalDeviceShaderExpectAssumeFeaturesKHR): VkPhysicalDeviceShaderExpectAssumeFeaturesKHR;
    shaderExpectAssume(): boolean;
    shaderExpectAssume(arg0: boolean): VkPhysicalDeviceShaderExpectAssumeFeaturesKHR;
}