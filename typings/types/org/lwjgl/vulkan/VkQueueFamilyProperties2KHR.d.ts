import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkQueueFamilyCheckpointProperties2NV } from '../../../org/lwjgl/vulkan/VkQueueFamilyCheckpointProperties2NV.d.ts'
import type { VkQueueFamilyCheckpointPropertiesNV } from '../../../org/lwjgl/vulkan/VkQueueFamilyCheckpointPropertiesNV.d.ts'
import type { VkQueueFamilyGlobalPriorityProperties } from '../../../org/lwjgl/vulkan/VkQueueFamilyGlobalPriorityProperties.d.ts'
import type { VkQueueFamilyGlobalPriorityPropertiesEXT } from '../../../org/lwjgl/vulkan/VkQueueFamilyGlobalPriorityPropertiesEXT.d.ts'
import type { VkQueueFamilyGlobalPriorityPropertiesKHR } from '../../../org/lwjgl/vulkan/VkQueueFamilyGlobalPriorityPropertiesKHR.d.ts'
import type { VkQueueFamilyOwnershipTransferPropertiesKHR } from '../../../org/lwjgl/vulkan/VkQueueFamilyOwnershipTransferPropertiesKHR.d.ts'
import type { VkQueueFamilyProperties } from '../../../org/lwjgl/vulkan/VkQueueFamilyProperties.d.ts'
import type { VkQueueFamilyProperties2 } from '../../../org/lwjgl/vulkan/VkQueueFamilyProperties2.d.ts'
import type { VkQueueFamilyQueryResultStatusPropertiesKHR } from '../../../org/lwjgl/vulkan/VkQueueFamilyQueryResultStatusPropertiesKHR.d.ts'
import type { VkQueueFamilyVideoPropertiesKHR } from '../../../org/lwjgl/vulkan/VkQueueFamilyVideoPropertiesKHR.d.ts'
export class VkQueueFamilyProperties2KHR extends VkQueueFamilyProperties2 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static QUEUEFAMILYPROPERTIES: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkQueueFamilyProperties2;
    static calloc(paramarg0: MemoryStack): VkQueueFamilyProperties2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkQueueFamilyProperties2KHR;
    static calloc(paramarg0: MemoryStack): VkQueueFamilyProperties2KHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkQueueFamilyProperties2;
    static create(paramarg0: number): VkQueueFamilyProperties2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkQueueFamilyProperties2KHR;
    static create(paramarg0: number): VkQueueFamilyProperties2KHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkQueueFamilyProperties2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkQueueFamilyProperties2KHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkQueueFamilyProperties2;
    static malloc(paramarg0: MemoryStack): VkQueueFamilyProperties2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkQueueFamilyProperties2KHR;
    static malloc(paramarg0: MemoryStack): VkQueueFamilyProperties2KHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nqueueFamilyProperties(paramarg0: number): VkQueueFamilyProperties;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkQueueFamilyProperties2KHR;
    pNext(): number;
    pNext(arg0: number): VkQueueFamilyProperties2KHR;
    pNext(arg0: VkQueueFamilyCheckpointProperties2NV): VkQueueFamilyProperties2;
    pNext(arg0: VkQueueFamilyCheckpointPropertiesNV): VkQueueFamilyProperties2;
    pNext(arg0: VkQueueFamilyGlobalPriorityProperties): VkQueueFamilyProperties2;
    pNext(arg0: VkQueueFamilyGlobalPriorityPropertiesEXT): VkQueueFamilyProperties2;
    pNext(arg0: VkQueueFamilyGlobalPriorityPropertiesKHR): VkQueueFamilyProperties2;
    pNext(arg0: VkQueueFamilyOwnershipTransferPropertiesKHR): VkQueueFamilyProperties2;
    pNext(arg0: VkQueueFamilyQueryResultStatusPropertiesKHR): VkQueueFamilyProperties2;
    pNext(arg0: VkQueueFamilyVideoPropertiesKHR): VkQueueFamilyProperties2;
    sType(): number;
    sType(arg0: number): VkQueueFamilyProperties2KHR;
    sType$Default(): VkQueueFamilyProperties2KHR;
    set(arg0: number, arg1: number): VkQueueFamilyProperties2KHR;
    set(arg0: VkQueueFamilyProperties2): VkQueueFamilyProperties2;
    set(arg0: VkQueueFamilyProperties2KHR): VkQueueFamilyProperties2KHR;
}