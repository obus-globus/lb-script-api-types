import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceExternalSemaphoreInfo } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceExternalSemaphoreInfo.d.ts'
import type { VkSemaphoreTypeCreateInfo } from '../../../org/lwjgl/vulkan/VkSemaphoreTypeCreateInfo.d.ts'
import type { VkSemaphoreTypeCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkSemaphoreTypeCreateInfoKHR.d.ts'
export class VkPhysicalDeviceExternalSemaphoreInfoKHR extends VkPhysicalDeviceExternalSemaphoreInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HANDLETYPE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceExternalSemaphoreInfo;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalSemaphoreInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceExternalSemaphoreInfoKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalSemaphoreInfoKHR;
    static create(): VkPhysicalDeviceExternalSemaphoreInfo;
    static create(paramarg0: number): VkPhysicalDeviceExternalSemaphoreInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceExternalSemaphoreInfoKHR;
    static create(paramarg0: number): VkPhysicalDeviceExternalSemaphoreInfoKHR;
    static createSafe(paramarg0: number): VkPhysicalDeviceExternalSemaphoreInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceExternalSemaphoreInfoKHR;
    static malloc(): VkPhysicalDeviceExternalSemaphoreInfo;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalSemaphoreInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceExternalSemaphoreInfoKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalSemaphoreInfoKHR;
    static nhandleType(paramarg0: number): number;
    static nhandleType(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceExternalSemaphoreInfoKHR;
    handleType(): number;
    handleType(arg0: number): VkPhysicalDeviceExternalSemaphoreInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceExternalSemaphoreInfoKHR;
    pNext(arg0: VkSemaphoreTypeCreateInfo): VkPhysicalDeviceExternalSemaphoreInfo;
    pNext(arg0: VkSemaphoreTypeCreateInfoKHR): VkPhysicalDeviceExternalSemaphoreInfo;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceExternalSemaphoreInfoKHR;
    sType$Default(): VkPhysicalDeviceExternalSemaphoreInfoKHR;
    set(arg0: number, arg1: number, arg2: number): VkPhysicalDeviceExternalSemaphoreInfoKHR;
    set(arg0: VkPhysicalDeviceExternalSemaphoreInfo): VkPhysicalDeviceExternalSemaphoreInfo;
    set(arg0: VkPhysicalDeviceExternalSemaphoreInfoKHR): VkPhysicalDeviceExternalSemaphoreInfoKHR;
}