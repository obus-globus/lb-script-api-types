import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceShaderSubgroupRotateFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceShaderSubgroupRotateFeatures.d.ts'
export class VkPhysicalDeviceShaderSubgroupRotateFeaturesKHR extends VkPhysicalDeviceShaderSubgroupRotateFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERSUBGROUPROTATE: number;
    static SHADERSUBGROUPROTATECLUSTERED: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShaderSubgroupRotateFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderSubgroupRotateFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceShaderSubgroupRotateFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderSubgroupRotateFeaturesKHR;
    static create(): VkPhysicalDeviceShaderSubgroupRotateFeatures;
    static create(paramarg0: number): VkPhysicalDeviceShaderSubgroupRotateFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceShaderSubgroupRotateFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceShaderSubgroupRotateFeaturesKHR;
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderSubgroupRotateFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderSubgroupRotateFeaturesKHR;
    static malloc(): VkPhysicalDeviceShaderSubgroupRotateFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderSubgroupRotateFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderSubgroupRotateFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderSubgroupRotateFeaturesKHR;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderSubgroupRotate(paramarg0: number): number;
    static nshaderSubgroupRotate(paramarg0: number, paramarg1: number): void;
    static nshaderSubgroupRotateClustered(paramarg0: number): number;
    static nshaderSubgroupRotateClustered(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderSubgroupRotateFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderSubgroupRotateFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderSubgroupRotateFeaturesKHR;
    sType$Default(): VkPhysicalDeviceShaderSubgroupRotateFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceShaderSubgroupRotateFeaturesKHR;
    set(arg0: VkPhysicalDeviceShaderSubgroupRotateFeatures): VkPhysicalDeviceShaderSubgroupRotateFeatures;
    set(arg0: VkPhysicalDeviceShaderSubgroupRotateFeaturesKHR): VkPhysicalDeviceShaderSubgroupRotateFeaturesKHR;
    shaderSubgroupRotate(): boolean;
    shaderSubgroupRotate(arg0: boolean): VkPhysicalDeviceShaderSubgroupRotateFeaturesKHR;
    shaderSubgroupRotateClustered(): boolean;
    shaderSubgroupRotateClustered(arg0: boolean): VkPhysicalDeviceShaderSubgroupRotateFeaturesKHR;
}