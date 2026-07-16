import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceImageRobustnessFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceImageRobustnessFeatures.d.ts'
export class VkPhysicalDeviceImageRobustnessFeaturesEXT extends VkPhysicalDeviceImageRobustnessFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static ROBUSTIMAGEACCESS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceImageRobustnessFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceImageRobustnessFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceImageRobustnessFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceImageRobustnessFeaturesEXT;
    static create(): VkPhysicalDeviceImageRobustnessFeatures;
    static create(paramarg0: number): VkPhysicalDeviceImageRobustnessFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceImageRobustnessFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceImageRobustnessFeaturesEXT;
    static createSafe(paramarg0: number): VkPhysicalDeviceImageRobustnessFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceImageRobustnessFeaturesEXT;
    static malloc(): VkPhysicalDeviceImageRobustnessFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceImageRobustnessFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceImageRobustnessFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceImageRobustnessFeaturesEXT;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrobustImageAccess(paramarg0: number): number;
    static nrobustImageAccess(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceImageRobustnessFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceImageRobustnessFeaturesEXT;
    robustImageAccess(): boolean;
    robustImageAccess(arg0: boolean): VkPhysicalDeviceImageRobustnessFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceImageRobustnessFeaturesEXT;
    sType$Default(): VkPhysicalDeviceImageRobustnessFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceImageRobustnessFeaturesEXT;
    set(arg0: VkPhysicalDeviceImageRobustnessFeatures): VkPhysicalDeviceImageRobustnessFeatures;
    set(arg0: VkPhysicalDeviceImageRobustnessFeaturesEXT): VkPhysicalDeviceImageRobustnessFeaturesEXT;
}