import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSemaphoreTypeCreateInfo } from '../../../org/lwjgl/vulkan/VkSemaphoreTypeCreateInfo.d.ts'
import type { VkSemaphoreTypeCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkSemaphoreTypeCreateInfoKHR.d.ts'
export class VkPhysicalDeviceExternalSemaphoreInfo extends Struct<VkPhysicalDeviceExternalSemaphoreInfo> implements NativeResource {
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
    static create(): VkPhysicalDeviceExternalSemaphoreInfo;
    static create(paramarg0: number): VkPhysicalDeviceExternalSemaphoreInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceExternalSemaphoreInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceExternalSemaphoreInfo;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalSemaphoreInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nhandleType(paramarg0: number): number;
    static nhandleType(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceExternalSemaphoreInfo;
    handleType(): number;
    handleType(arg0: number): VkPhysicalDeviceExternalSemaphoreInfo;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceExternalSemaphoreInfo;
    pNext(arg0: VkSemaphoreTypeCreateInfo): VkPhysicalDeviceExternalSemaphoreInfo;
    pNext(arg0: VkSemaphoreTypeCreateInfoKHR): VkPhysicalDeviceExternalSemaphoreInfo;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceExternalSemaphoreInfo;
    sType$Default(): VkPhysicalDeviceExternalSemaphoreInfo;
    set(arg0: number, arg1: number, arg2: number): VkPhysicalDeviceExternalSemaphoreInfo;
    set(arg0: VkPhysicalDeviceExternalSemaphoreInfo): VkPhysicalDeviceExternalSemaphoreInfo;
    sizeof(): number;
}