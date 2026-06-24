import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceFragmentShaderBarycentricFeaturesKHR } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceFragmentShaderBarycentricFeaturesKHR.d.ts'
export class VkPhysicalDeviceFragmentShaderBarycentricFeaturesNV extends VkPhysicalDeviceFragmentShaderBarycentricFeaturesKHR {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FRAGMENTSHADERBARYCENTRIC: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceFragmentShaderBarycentricFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentShaderBarycentricFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceFragmentShaderBarycentricFeaturesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentShaderBarycentricFeaturesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceFragmentShaderBarycentricFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceFragmentShaderBarycentricFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceFragmentShaderBarycentricFeaturesNV;
    static create(paramarg0: number): VkPhysicalDeviceFragmentShaderBarycentricFeaturesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceFragmentShaderBarycentricFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceFragmentShaderBarycentricFeaturesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceFragmentShaderBarycentricFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentShaderBarycentricFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceFragmentShaderBarycentricFeaturesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentShaderBarycentricFeaturesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfragmentShaderBarycentric(paramarg0: number): number;
    static nfragmentShaderBarycentric(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceFragmentShaderBarycentricFeaturesNV;
    fragmentShaderBarycentric(): boolean;
    fragmentShaderBarycentric(arg0: boolean): VkPhysicalDeviceFragmentShaderBarycentricFeaturesNV;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceFragmentShaderBarycentricFeaturesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceFragmentShaderBarycentricFeaturesNV;
    sType$Default(): VkPhysicalDeviceFragmentShaderBarycentricFeaturesNV;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceFragmentShaderBarycentricFeaturesNV;
    set(arg0: VkPhysicalDeviceFragmentShaderBarycentricFeaturesKHR): VkPhysicalDeviceFragmentShaderBarycentricFeaturesKHR;
    set(arg0: VkPhysicalDeviceFragmentShaderBarycentricFeaturesNV): VkPhysicalDeviceFragmentShaderBarycentricFeaturesNV;
}