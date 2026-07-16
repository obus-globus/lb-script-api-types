import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceDepthClampZeroOneFeaturesKHR } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceDepthClampZeroOneFeaturesKHR.d.ts'
export class VkPhysicalDeviceDepthClampZeroOneFeaturesEXT extends VkPhysicalDeviceDepthClampZeroOneFeaturesKHR {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEPTHCLAMPZEROONE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceDepthClampZeroOneFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDepthClampZeroOneFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceDepthClampZeroOneFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDepthClampZeroOneFeaturesKHR;
    static create(): VkPhysicalDeviceDepthClampZeroOneFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceDepthClampZeroOneFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceDepthClampZeroOneFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceDepthClampZeroOneFeaturesKHR;
    static createSafe(paramarg0: number): VkPhysicalDeviceDepthClampZeroOneFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceDepthClampZeroOneFeaturesKHR;
    static malloc(): VkPhysicalDeviceDepthClampZeroOneFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDepthClampZeroOneFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceDepthClampZeroOneFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDepthClampZeroOneFeaturesKHR;
    static ndepthClampZeroOne(paramarg0: number): number;
    static ndepthClampZeroOne(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceDepthClampZeroOneFeaturesEXT;
    depthClampZeroOne(): boolean;
    depthClampZeroOne(arg0: boolean): VkPhysicalDeviceDepthClampZeroOneFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceDepthClampZeroOneFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceDepthClampZeroOneFeaturesEXT;
    sType$Default(): VkPhysicalDeviceDepthClampZeroOneFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceDepthClampZeroOneFeaturesEXT;
    set(arg0: VkPhysicalDeviceDepthClampZeroOneFeaturesEXT): VkPhysicalDeviceDepthClampZeroOneFeaturesEXT;
    set(arg0: VkPhysicalDeviceDepthClampZeroOneFeaturesKHR): VkPhysicalDeviceDepthClampZeroOneFeaturesKHR;
}