import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkBufferUsageFlags2CreateInfo } from '../../../org/lwjgl/vulkan/VkBufferUsageFlags2CreateInfo.d.ts'
import type { VkBufferUsageFlags2CreateInfoKHR } from '../../../org/lwjgl/vulkan/VkBufferUsageFlags2CreateInfoKHR.d.ts'
import type { VkPhysicalDeviceExternalBufferInfo } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceExternalBufferInfo.d.ts'
export class VkPhysicalDeviceExternalBufferInfoKHR extends VkPhysicalDeviceExternalBufferInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static HANDLETYPE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static USAGE: number;
    static calloc(): VkPhysicalDeviceExternalBufferInfo;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalBufferInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceExternalBufferInfoKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalBufferInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceExternalBufferInfo;
    static create(paramarg0: number): VkPhysicalDeviceExternalBufferInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceExternalBufferInfoKHR;
    static create(paramarg0: number): VkPhysicalDeviceExternalBufferInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceExternalBufferInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceExternalBufferInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceExternalBufferInfo;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalBufferInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceExternalBufferInfoKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalBufferInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nhandleType(paramarg0: number): number;
    static nhandleType(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nusage(paramarg0: number): number;
    static nusage(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceExternalBufferInfoKHR;
    flags(): number;
    flags(arg0: number): VkPhysicalDeviceExternalBufferInfoKHR;
    handleType(): number;
    handleType(arg0: number): VkPhysicalDeviceExternalBufferInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceExternalBufferInfoKHR;
    pNext(arg0: VkBufferUsageFlags2CreateInfo): VkPhysicalDeviceExternalBufferInfo;
    pNext(arg0: VkBufferUsageFlags2CreateInfoKHR): VkPhysicalDeviceExternalBufferInfo;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceExternalBufferInfoKHR;
    sType$Default(): VkPhysicalDeviceExternalBufferInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkPhysicalDeviceExternalBufferInfoKHR;
    set(arg0: VkPhysicalDeviceExternalBufferInfo): VkPhysicalDeviceExternalBufferInfo;
    set(arg0: VkPhysicalDeviceExternalBufferInfoKHR): VkPhysicalDeviceExternalBufferInfoKHR;
    usage(): number;
    usage(arg0: number): VkPhysicalDeviceExternalBufferInfoKHR;
}