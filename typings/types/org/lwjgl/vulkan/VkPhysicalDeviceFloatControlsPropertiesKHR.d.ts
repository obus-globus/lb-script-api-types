import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceFloatControlsProperties } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceFloatControlsProperties.d.ts'
export class VkPhysicalDeviceFloatControlsPropertiesKHR extends VkPhysicalDeviceFloatControlsProperties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DENORMBEHAVIORINDEPENDENCE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static ROUNDINGMODEINDEPENDENCE: number;
    static SHADERDENORMFLUSHTOZEROFLOAT16: number;
    static SHADERDENORMFLUSHTOZEROFLOAT32: number;
    static SHADERDENORMFLUSHTOZEROFLOAT64: number;
    static SHADERDENORMPRESERVEFLOAT16: number;
    static SHADERDENORMPRESERVEFLOAT32: number;
    static SHADERDENORMPRESERVEFLOAT64: number;
    static SHADERROUNDINGMODERTEFLOAT16: number;
    static SHADERROUNDINGMODERTEFLOAT32: number;
    static SHADERROUNDINGMODERTEFLOAT64: number;
    static SHADERROUNDINGMODERTZFLOAT16: number;
    static SHADERROUNDINGMODERTZFLOAT32: number;
    static SHADERROUNDINGMODERTZFLOAT64: number;
    static SHADERSIGNEDZEROINFNANPRESERVEFLOAT16: number;
    static SHADERSIGNEDZEROINFNANPRESERVEFLOAT32: number;
    static SHADERSIGNEDZEROINFNANPRESERVEFLOAT64: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceFloatControlsProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceFloatControlsProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceFloatControlsPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceFloatControlsPropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceFloatControlsProperties;
    static create(paramarg0: number): VkPhysicalDeviceFloatControlsProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceFloatControlsPropertiesKHR;
    static create(paramarg0: number): VkPhysicalDeviceFloatControlsPropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceFloatControlsProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceFloatControlsPropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceFloatControlsProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceFloatControlsProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceFloatControlsPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceFloatControlsPropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndenormBehaviorIndependence(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nroundingModeIndependence(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderDenormFlushToZeroFloat16(paramarg0: number): number;
    static nshaderDenormFlushToZeroFloat32(paramarg0: number): number;
    static nshaderDenormFlushToZeroFloat64(paramarg0: number): number;
    static nshaderDenormPreserveFloat16(paramarg0: number): number;
    static nshaderDenormPreserveFloat32(paramarg0: number): number;
    static nshaderDenormPreserveFloat64(paramarg0: number): number;
    static nshaderRoundingModeRTEFloat16(paramarg0: number): number;
    static nshaderRoundingModeRTEFloat32(paramarg0: number): number;
    static nshaderRoundingModeRTEFloat64(paramarg0: number): number;
    static nshaderRoundingModeRTZFloat16(paramarg0: number): number;
    static nshaderRoundingModeRTZFloat32(paramarg0: number): number;
    static nshaderRoundingModeRTZFloat64(paramarg0: number): number;
    static nshaderSignedZeroInfNanPreserveFloat16(paramarg0: number): number;
    static nshaderSignedZeroInfNanPreserveFloat32(paramarg0: number): number;
    static nshaderSignedZeroInfNanPreserveFloat64(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceFloatControlsPropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceFloatControlsPropertiesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceFloatControlsPropertiesKHR;
    sType$Default(): VkPhysicalDeviceFloatControlsPropertiesKHR;
    set(arg0: number, arg1: number): VkPhysicalDeviceFloatControlsPropertiesKHR;
    set(arg0: VkPhysicalDeviceFloatControlsProperties): VkPhysicalDeviceFloatControlsProperties;
    set(arg0: VkPhysicalDeviceFloatControlsPropertiesKHR): VkPhysicalDeviceFloatControlsPropertiesKHR;
}