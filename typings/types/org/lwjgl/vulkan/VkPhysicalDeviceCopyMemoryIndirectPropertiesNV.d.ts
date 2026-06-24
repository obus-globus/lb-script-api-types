import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceCopyMemoryIndirectPropertiesKHR } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceCopyMemoryIndirectPropertiesKHR.d.ts'
export class VkPhysicalDeviceCopyMemoryIndirectPropertiesNV extends VkPhysicalDeviceCopyMemoryIndirectPropertiesKHR {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUPPORTEDQUEUES: number;
    static calloc(): VkPhysicalDeviceCopyMemoryIndirectPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceCopyMemoryIndirectPropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceCopyMemoryIndirectPropertiesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceCopyMemoryIndirectPropertiesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceCopyMemoryIndirectPropertiesKHR;
    static create(paramarg0: number): VkPhysicalDeviceCopyMemoryIndirectPropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceCopyMemoryIndirectPropertiesNV;
    static create(paramarg0: number): VkPhysicalDeviceCopyMemoryIndirectPropertiesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceCopyMemoryIndirectPropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceCopyMemoryIndirectPropertiesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceCopyMemoryIndirectPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceCopyMemoryIndirectPropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceCopyMemoryIndirectPropertiesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceCopyMemoryIndirectPropertiesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsupportedQueues(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceCopyMemoryIndirectPropertiesNV;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceCopyMemoryIndirectPropertiesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceCopyMemoryIndirectPropertiesNV;
    sType$Default(): VkPhysicalDeviceCopyMemoryIndirectPropertiesNV;
    set(arg0: number, arg1: number): VkPhysicalDeviceCopyMemoryIndirectPropertiesNV;
    set(arg0: VkPhysicalDeviceCopyMemoryIndirectPropertiesKHR): VkPhysicalDeviceCopyMemoryIndirectPropertiesKHR;
    set(arg0: VkPhysicalDeviceCopyMemoryIndirectPropertiesNV): VkPhysicalDeviceCopyMemoryIndirectPropertiesNV;
}