import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceMultiviewFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceMultiviewFeatures.d.ts'
export class VkPhysicalDeviceMultiviewFeaturesKHR extends VkPhysicalDeviceMultiviewFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MULTIVIEW: number;
    static MULTIVIEWGEOMETRYSHADER: number;
    static MULTIVIEWTESSELLATIONSHADER: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMultiviewFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMultiviewFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceMultiviewFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMultiviewFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceMultiviewFeatures;
    static create(paramarg0: number): VkPhysicalDeviceMultiviewFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceMultiviewFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceMultiviewFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMultiviewFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMultiviewFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceMultiviewFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMultiviewFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceMultiviewFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMultiviewFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmultiview(paramarg0: number): number;
    static nmultiview(paramarg0: number, paramarg1: number): void;
    static nmultiviewGeometryShader(paramarg0: number): number;
    static nmultiviewGeometryShader(paramarg0: number, paramarg1: number): void;
    static nmultiviewTessellationShader(paramarg0: number): number;
    static nmultiviewTessellationShader(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMultiviewFeaturesKHR;
    multiview(): boolean;
    multiview(arg0: boolean): VkPhysicalDeviceMultiviewFeaturesKHR;
    multiviewGeometryShader(): boolean;
    multiviewGeometryShader(arg0: boolean): VkPhysicalDeviceMultiviewFeaturesKHR;
    multiviewTessellationShader(): boolean;
    multiviewTessellationShader(arg0: boolean): VkPhysicalDeviceMultiviewFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMultiviewFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMultiviewFeaturesKHR;
    sType$Default(): VkPhysicalDeviceMultiviewFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceMultiviewFeaturesKHR;
    set(arg0: VkPhysicalDeviceMultiviewFeatures): VkPhysicalDeviceMultiviewFeatures;
    set(arg0: VkPhysicalDeviceMultiviewFeaturesKHR): VkPhysicalDeviceMultiviewFeaturesKHR;
}