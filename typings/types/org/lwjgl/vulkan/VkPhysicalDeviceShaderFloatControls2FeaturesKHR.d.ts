import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceShaderFloatControls2Features } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceShaderFloatControls2Features.d.ts'
export class VkPhysicalDeviceShaderFloatControls2FeaturesKHR extends VkPhysicalDeviceShaderFloatControls2Features {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERFLOATCONTROLS2: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShaderFloatControls2Features;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderFloatControls2Features;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceShaderFloatControls2FeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderFloatControls2FeaturesKHR;
    static create(): VkPhysicalDeviceShaderFloatControls2Features;
    static create(paramarg0: number): VkPhysicalDeviceShaderFloatControls2Features;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceShaderFloatControls2FeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceShaderFloatControls2FeaturesKHR;
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderFloatControls2Features;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderFloatControls2FeaturesKHR;
    static malloc(): VkPhysicalDeviceShaderFloatControls2Features;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderFloatControls2Features;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderFloatControls2FeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderFloatControls2FeaturesKHR;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderFloatControls2(paramarg0: number): number;
    static nshaderFloatControls2(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderFloatControls2FeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderFloatControls2FeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderFloatControls2FeaturesKHR;
    sType$Default(): VkPhysicalDeviceShaderFloatControls2FeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceShaderFloatControls2FeaturesKHR;
    set(arg0: VkPhysicalDeviceShaderFloatControls2Features): VkPhysicalDeviceShaderFloatControls2Features;
    set(arg0: VkPhysicalDeviceShaderFloatControls2FeaturesKHR): VkPhysicalDeviceShaderFloatControls2FeaturesKHR;
    shaderFloatControls2(): boolean;
    shaderFloatControls2(arg0: boolean): VkPhysicalDeviceShaderFloatControls2FeaturesKHR;
}