import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceMemoryBudgetPropertiesEXT } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceMemoryBudgetPropertiesEXT.d.ts'
import type { VkPhysicalDeviceMemoryProperties } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceMemoryProperties.d.ts'
import type { VkPhysicalDeviceMemoryProperties2 } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceMemoryProperties2.d.ts'
export class VkPhysicalDeviceMemoryProperties2KHR extends VkPhysicalDeviceMemoryProperties2 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MEMORYPROPERTIES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMemoryProperties2;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMemoryProperties2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceMemoryProperties2KHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMemoryProperties2KHR;
    static create(): VkPhysicalDeviceMemoryProperties2;
    static create(paramarg0: number): VkPhysicalDeviceMemoryProperties2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceMemoryProperties2KHR;
    static create(paramarg0: number): VkPhysicalDeviceMemoryProperties2KHR;
    static createSafe(paramarg0: number): VkPhysicalDeviceMemoryProperties2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMemoryProperties2KHR;
    static malloc(): VkPhysicalDeviceMemoryProperties2;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMemoryProperties2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceMemoryProperties2KHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMemoryProperties2KHR;
    static nmemoryProperties(paramarg0: number): VkPhysicalDeviceMemoryProperties;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMemoryProperties2KHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMemoryProperties2KHR;
    pNext(arg0: VkPhysicalDeviceMemoryBudgetPropertiesEXT): VkPhysicalDeviceMemoryProperties2;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMemoryProperties2KHR;
    sType$Default(): VkPhysicalDeviceMemoryProperties2KHR;
    set(arg0: number, arg1: number): VkPhysicalDeviceMemoryProperties2KHR;
    set(arg0: VkPhysicalDeviceMemoryProperties2): VkPhysicalDeviceMemoryProperties2;
    set(arg0: VkPhysicalDeviceMemoryProperties2KHR): VkPhysicalDeviceMemoryProperties2KHR;
}