import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceExtendedSparseAddressSpacePropertiesNV extends Struct<VkPhysicalDeviceExtendedSparseAddressSpacePropertiesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXTENDEDSPARSEADDRESSSPACESIZE: number;
    static EXTENDEDSPARSEBUFFERUSAGEFLAGS: number;
    static EXTENDEDSPARSEIMAGEUSAGEFLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceExtendedSparseAddressSpacePropertiesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceExtendedSparseAddressSpacePropertiesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceExtendedSparseAddressSpacePropertiesNV;
    static create(paramarg0: number): VkPhysicalDeviceExtendedSparseAddressSpacePropertiesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceExtendedSparseAddressSpacePropertiesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceExtendedSparseAddressSpacePropertiesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceExtendedSparseAddressSpacePropertiesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nextendedSparseAddressSpaceSize(paramarg0: number): number;
    static nextendedSparseBufferUsageFlags(paramarg0: number): number;
    static nextendedSparseImageUsageFlags(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceExtendedSparseAddressSpacePropertiesNV;
    extendedSparseAddressSpaceSize(): number;
    extendedSparseBufferUsageFlags(): number;
    extendedSparseImageUsageFlags(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceExtendedSparseAddressSpacePropertiesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceExtendedSparseAddressSpacePropertiesNV;
    sType$Default(): VkPhysicalDeviceExtendedSparseAddressSpacePropertiesNV;
    set(arg0: number, arg1: number): VkPhysicalDeviceExtendedSparseAddressSpacePropertiesNV;
    set(arg0: VkPhysicalDeviceExtendedSparseAddressSpacePropertiesNV): VkPhysicalDeviceExtendedSparseAddressSpacePropertiesNV;
    sizeof(): number;
}