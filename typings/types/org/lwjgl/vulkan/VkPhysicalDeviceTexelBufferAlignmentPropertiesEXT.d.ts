import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceTexelBufferAlignmentProperties } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceTexelBufferAlignmentProperties.d.ts'
export class VkPhysicalDeviceTexelBufferAlignmentPropertiesEXT extends VkPhysicalDeviceTexelBufferAlignmentProperties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STORAGETEXELBUFFEROFFSETALIGNMENTBYTES: number;
    static STORAGETEXELBUFFEROFFSETSINGLETEXELALIGNMENT: number;
    static STYPE: number;
    static UNIFORMTEXELBUFFEROFFSETALIGNMENTBYTES: number;
    static UNIFORMTEXELBUFFEROFFSETSINGLETEXELALIGNMENT: number;
    static calloc(): VkPhysicalDeviceTexelBufferAlignmentProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceTexelBufferAlignmentProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceTexelBufferAlignmentPropertiesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceTexelBufferAlignmentPropertiesEXT;
    static create(): VkPhysicalDeviceTexelBufferAlignmentProperties;
    static create(paramarg0: number): VkPhysicalDeviceTexelBufferAlignmentProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceTexelBufferAlignmentPropertiesEXT;
    static create(paramarg0: number): VkPhysicalDeviceTexelBufferAlignmentPropertiesEXT;
    static createSafe(paramarg0: number): VkPhysicalDeviceTexelBufferAlignmentProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceTexelBufferAlignmentPropertiesEXT;
    static malloc(): VkPhysicalDeviceTexelBufferAlignmentProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceTexelBufferAlignmentProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceTexelBufferAlignmentPropertiesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceTexelBufferAlignmentPropertiesEXT;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstorageTexelBufferOffsetAlignmentBytes(paramarg0: number): number;
    static nstorageTexelBufferOffsetSingleTexelAlignment(paramarg0: number): number;
    static nuniformTexelBufferOffsetAlignmentBytes(paramarg0: number): number;
    static nuniformTexelBufferOffsetSingleTexelAlignment(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceTexelBufferAlignmentPropertiesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceTexelBufferAlignmentPropertiesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceTexelBufferAlignmentPropertiesEXT;
    sType$Default(): VkPhysicalDeviceTexelBufferAlignmentPropertiesEXT;
    set(arg0: number, arg1: number): VkPhysicalDeviceTexelBufferAlignmentPropertiesEXT;
    set(arg0: VkPhysicalDeviceTexelBufferAlignmentProperties): VkPhysicalDeviceTexelBufferAlignmentProperties;
    set(arg0: VkPhysicalDeviceTexelBufferAlignmentPropertiesEXT): VkPhysicalDeviceTexelBufferAlignmentPropertiesEXT;
}