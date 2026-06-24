import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceSynchronization2Features } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceSynchronization2Features.d.ts'
export class VkPhysicalDeviceSynchronization2FeaturesKHR extends VkPhysicalDeviceSynchronization2Features {
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
    static SYNCHRONIZATION2: number;
    static calloc(): VkPhysicalDeviceSynchronization2Features;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceSynchronization2Features;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceSynchronization2FeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceSynchronization2FeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceSynchronization2Features;
    static create(paramarg0: number): VkPhysicalDeviceSynchronization2Features;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceSynchronization2FeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceSynchronization2FeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceSynchronization2Features;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceSynchronization2FeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceSynchronization2Features;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceSynchronization2Features;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceSynchronization2FeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceSynchronization2FeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsynchronization2(paramarg0: number): number;
    static nsynchronization2(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceSynchronization2FeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceSynchronization2FeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceSynchronization2FeaturesKHR;
    sType$Default(): VkPhysicalDeviceSynchronization2FeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceSynchronization2FeaturesKHR;
    set(arg0: VkPhysicalDeviceSynchronization2Features): VkPhysicalDeviceSynchronization2Features;
    set(arg0: VkPhysicalDeviceSynchronization2FeaturesKHR): VkPhysicalDeviceSynchronization2FeaturesKHR;
    synchronization2(): boolean;
    synchronization2(arg0: boolean): VkPhysicalDeviceSynchronization2FeaturesKHR;
}