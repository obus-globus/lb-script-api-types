import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkBufferDeviceAddressInfo } from '../../../org/lwjgl/vulkan/VkBufferDeviceAddressInfo.d.ts'
export class VkBufferDeviceAddressInfoEXT extends VkBufferDeviceAddressInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFER: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkBufferDeviceAddressInfo;
    static calloc(paramarg0: MemoryStack): VkBufferDeviceAddressInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkBufferDeviceAddressInfoEXT;
    static calloc(paramarg0: MemoryStack): VkBufferDeviceAddressInfoEXT;
    static create(): VkBufferDeviceAddressInfo;
    static create(paramarg0: number): VkBufferDeviceAddressInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkBufferDeviceAddressInfoEXT;
    static create(paramarg0: number): VkBufferDeviceAddressInfoEXT;
    static createSafe(paramarg0: number): VkBufferDeviceAddressInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBufferDeviceAddressInfoEXT;
    static malloc(): VkBufferDeviceAddressInfo;
    static malloc(paramarg0: MemoryStack): VkBufferDeviceAddressInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkBufferDeviceAddressInfoEXT;
    static malloc(paramarg0: MemoryStack): VkBufferDeviceAddressInfoEXT;
    static nbuffer(paramarg0: number): number;
    static nbuffer(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    buffer(): number;
    buffer(arg0: number): VkBufferDeviceAddressInfoEXT;
    create(arg0: number, arg1: ByteBuffer): VkBufferDeviceAddressInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkBufferDeviceAddressInfoEXT;
    sType(): number;
    sType(arg0: number): VkBufferDeviceAddressInfoEXT;
    sType$Default(): VkBufferDeviceAddressInfoEXT;
    set(arg0: number, arg1: number, arg2: number): VkBufferDeviceAddressInfoEXT;
    set(arg0: VkBufferDeviceAddressInfo): VkBufferDeviceAddressInfo;
    set(arg0: VkBufferDeviceAddressInfoEXT): VkBufferDeviceAddressInfoEXT;
}