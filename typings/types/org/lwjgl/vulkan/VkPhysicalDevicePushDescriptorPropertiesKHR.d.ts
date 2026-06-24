import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDevicePushDescriptorProperties } from '../../../org/lwjgl/vulkan/VkPhysicalDevicePushDescriptorProperties.d.ts'
export class VkPhysicalDevicePushDescriptorPropertiesKHR extends VkPhysicalDevicePushDescriptorProperties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXPUSHDESCRIPTORS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDevicePushDescriptorProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePushDescriptorProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDevicePushDescriptorPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePushDescriptorPropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDevicePushDescriptorProperties;
    static create(paramarg0: number): VkPhysicalDevicePushDescriptorProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDevicePushDescriptorPropertiesKHR;
    static create(paramarg0: number): VkPhysicalDevicePushDescriptorPropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevicePushDescriptorProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevicePushDescriptorPropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDevicePushDescriptorProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePushDescriptorProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDevicePushDescriptorPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePushDescriptorPropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxPushDescriptors(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDevicePushDescriptorPropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDevicePushDescriptorPropertiesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDevicePushDescriptorPropertiesKHR;
    sType$Default(): VkPhysicalDevicePushDescriptorPropertiesKHR;
    set(arg0: number, arg1: number): VkPhysicalDevicePushDescriptorPropertiesKHR;
    set(arg0: VkPhysicalDevicePushDescriptorProperties): VkPhysicalDevicePushDescriptorProperties;
    set(arg0: VkPhysicalDevicePushDescriptorPropertiesKHR): VkPhysicalDevicePushDescriptorPropertiesKHR;
}