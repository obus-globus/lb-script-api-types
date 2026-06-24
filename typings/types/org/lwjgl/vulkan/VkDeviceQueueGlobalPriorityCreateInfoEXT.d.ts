import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceQueueGlobalPriorityCreateInfo } from '../../../org/lwjgl/vulkan/VkDeviceQueueGlobalPriorityCreateInfo.d.ts'
export class VkDeviceQueueGlobalPriorityCreateInfoEXT extends VkDeviceQueueGlobalPriorityCreateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static GLOBALPRIORITY: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDeviceQueueGlobalPriorityCreateInfo;
    static calloc(paramarg0: MemoryStack): VkDeviceQueueGlobalPriorityCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkDeviceQueueGlobalPriorityCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkDeviceQueueGlobalPriorityCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceQueueGlobalPriorityCreateInfo;
    static create(paramarg0: number): VkDeviceQueueGlobalPriorityCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkDeviceQueueGlobalPriorityCreateInfoEXT;
    static create(paramarg0: number): VkDeviceQueueGlobalPriorityCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceQueueGlobalPriorityCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceQueueGlobalPriorityCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceQueueGlobalPriorityCreateInfo;
    static malloc(paramarg0: MemoryStack): VkDeviceQueueGlobalPriorityCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkDeviceQueueGlobalPriorityCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkDeviceQueueGlobalPriorityCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nglobalPriority(paramarg0: number): number;
    static nglobalPriority(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkDeviceQueueGlobalPriorityCreateInfoEXT;
    globalPriority(): number;
    globalPriority(arg0: number): VkDeviceQueueGlobalPriorityCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkDeviceQueueGlobalPriorityCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkDeviceQueueGlobalPriorityCreateInfoEXT;
    sType$Default(): VkDeviceQueueGlobalPriorityCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number): VkDeviceQueueGlobalPriorityCreateInfoEXT;
    set(arg0: VkDeviceQueueGlobalPriorityCreateInfo): VkDeviceQueueGlobalPriorityCreateInfo;
    set(arg0: VkDeviceQueueGlobalPriorityCreateInfoEXT): VkDeviceQueueGlobalPriorityCreateInfoEXT;
}