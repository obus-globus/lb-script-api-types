import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkMemoryOpaqueCaptureAddressAllocateInfo } from '../../../org/lwjgl/vulkan/VkMemoryOpaqueCaptureAddressAllocateInfo.d.ts'
export class VkMemoryOpaqueCaptureAddressAllocateInfoKHR extends VkMemoryOpaqueCaptureAddressAllocateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static OPAQUECAPTUREADDRESS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkMemoryOpaqueCaptureAddressAllocateInfo;
    static calloc(paramarg0: MemoryStack): VkMemoryOpaqueCaptureAddressAllocateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkMemoryOpaqueCaptureAddressAllocateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkMemoryOpaqueCaptureAddressAllocateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkMemoryOpaqueCaptureAddressAllocateInfo;
    static create(paramarg0: number): VkMemoryOpaqueCaptureAddressAllocateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkMemoryOpaqueCaptureAddressAllocateInfoKHR;
    static create(paramarg0: number): VkMemoryOpaqueCaptureAddressAllocateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMemoryOpaqueCaptureAddressAllocateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMemoryOpaqueCaptureAddressAllocateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkMemoryOpaqueCaptureAddressAllocateInfo;
    static malloc(paramarg0: MemoryStack): VkMemoryOpaqueCaptureAddressAllocateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkMemoryOpaqueCaptureAddressAllocateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkMemoryOpaqueCaptureAddressAllocateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nopaqueCaptureAddress(paramarg0: number): number;
    static nopaqueCaptureAddress(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkMemoryOpaqueCaptureAddressAllocateInfoKHR;
    opaqueCaptureAddress(): number;
    opaqueCaptureAddress(arg0: number): VkMemoryOpaqueCaptureAddressAllocateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkMemoryOpaqueCaptureAddressAllocateInfoKHR;
    sType(): number;
    sType(arg0: number): VkMemoryOpaqueCaptureAddressAllocateInfoKHR;
    sType$Default(): VkMemoryOpaqueCaptureAddressAllocateInfoKHR;
    set(arg0: number, arg1: number, arg2: number): VkMemoryOpaqueCaptureAddressAllocateInfoKHR;
    set(arg0: VkMemoryOpaqueCaptureAddressAllocateInfo): VkMemoryOpaqueCaptureAddressAllocateInfo;
    set(arg0: VkMemoryOpaqueCaptureAddressAllocateInfoKHR): VkMemoryOpaqueCaptureAddressAllocateInfoKHR;
}