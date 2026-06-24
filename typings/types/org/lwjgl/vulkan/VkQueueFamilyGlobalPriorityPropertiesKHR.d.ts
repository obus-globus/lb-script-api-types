import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkQueueFamilyGlobalPriorityProperties } from '../../../org/lwjgl/vulkan/VkQueueFamilyGlobalPriorityProperties.d.ts'
export class VkQueueFamilyGlobalPriorityPropertiesKHR extends VkQueueFamilyGlobalPriorityProperties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRIORITIES: number;
    static PRIORITYCOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkQueueFamilyGlobalPriorityProperties;
    static calloc(paramarg0: MemoryStack): VkQueueFamilyGlobalPriorityProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkQueueFamilyGlobalPriorityPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkQueueFamilyGlobalPriorityPropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkQueueFamilyGlobalPriorityProperties;
    static create(paramarg0: number): VkQueueFamilyGlobalPriorityProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkQueueFamilyGlobalPriorityPropertiesKHR;
    static create(paramarg0: number): VkQueueFamilyGlobalPriorityPropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkQueueFamilyGlobalPriorityProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkQueueFamilyGlobalPriorityPropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkQueueFamilyGlobalPriorityProperties;
    static malloc(paramarg0: MemoryStack): VkQueueFamilyGlobalPriorityProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkQueueFamilyGlobalPriorityPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkQueueFamilyGlobalPriorityPropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npriorities(paramarg0: number, paramarg1: number): number;
    static npriorities(paramarg0: number): IntBuffer;
    static npriorityCount(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkQueueFamilyGlobalPriorityPropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkQueueFamilyGlobalPriorityPropertiesKHR;
    sType(): number;
    sType(arg0: number): VkQueueFamilyGlobalPriorityPropertiesKHR;
    sType$Default(): VkQueueFamilyGlobalPriorityPropertiesKHR;
    set(arg0: number, arg1: number): VkQueueFamilyGlobalPriorityPropertiesKHR;
    set(arg0: VkQueueFamilyGlobalPriorityProperties): VkQueueFamilyGlobalPriorityProperties;
    set(arg0: VkQueueFamilyGlobalPriorityPropertiesKHR): VkQueueFamilyGlobalPriorityPropertiesKHR;
}