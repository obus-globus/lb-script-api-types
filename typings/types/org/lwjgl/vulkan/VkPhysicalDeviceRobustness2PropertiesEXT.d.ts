import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceRobustness2PropertiesKHR } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceRobustness2PropertiesKHR.d.ts'
export class VkPhysicalDeviceRobustness2PropertiesEXT extends VkPhysicalDeviceRobustness2PropertiesKHR {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static ROBUSTSTORAGEBUFFERACCESSSIZEALIGNMENT: number;
    static ROBUSTUNIFORMBUFFERACCESSSIZEALIGNMENT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceRobustness2PropertiesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceRobustness2PropertiesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceRobustness2PropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceRobustness2PropertiesKHR;
    static create(): VkPhysicalDeviceRobustness2PropertiesEXT;
    static create(paramarg0: number): VkPhysicalDeviceRobustness2PropertiesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceRobustness2PropertiesKHR;
    static create(paramarg0: number): VkPhysicalDeviceRobustness2PropertiesKHR;
    static createSafe(paramarg0: number): VkPhysicalDeviceRobustness2PropertiesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceRobustness2PropertiesKHR;
    static malloc(): VkPhysicalDeviceRobustness2PropertiesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceRobustness2PropertiesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceRobustness2PropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceRobustness2PropertiesKHR;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrobustStorageBufferAccessSizeAlignment(paramarg0: number): number;
    static nrobustUniformBufferAccessSizeAlignment(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceRobustness2PropertiesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceRobustness2PropertiesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceRobustness2PropertiesEXT;
    sType$Default(): VkPhysicalDeviceRobustness2PropertiesEXT;
    set(arg0: number, arg1: number): VkPhysicalDeviceRobustness2PropertiesEXT;
    set(arg0: VkPhysicalDeviceRobustness2PropertiesEXT): VkPhysicalDeviceRobustness2PropertiesEXT;
    set(arg0: VkPhysicalDeviceRobustness2PropertiesKHR): VkPhysicalDeviceRobustness2PropertiesKHR;
}