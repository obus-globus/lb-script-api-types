import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkBufferOpaqueCaptureAddressCreateInfo extends Struct<VkBufferOpaqueCaptureAddressCreateInfo> implements NativeResource {
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
    static calloc(): VkBufferOpaqueCaptureAddressCreateInfo;
    static calloc(paramarg0: MemoryStack): VkBufferOpaqueCaptureAddressCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkBufferOpaqueCaptureAddressCreateInfo;
    static create(paramarg0: number): VkBufferOpaqueCaptureAddressCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBufferOpaqueCaptureAddressCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkBufferOpaqueCaptureAddressCreateInfo;
    static malloc(paramarg0: MemoryStack): VkBufferOpaqueCaptureAddressCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nopaqueCaptureAddress(paramarg0: number): number;
    static nopaqueCaptureAddress(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkBufferOpaqueCaptureAddressCreateInfo;
    opaqueCaptureAddress(): number;
    opaqueCaptureAddress(arg0: number): VkBufferOpaqueCaptureAddressCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkBufferOpaqueCaptureAddressCreateInfo;
    sType(): number;
    sType(arg0: number): VkBufferOpaqueCaptureAddressCreateInfo;
    sType$Default(): VkBufferOpaqueCaptureAddressCreateInfo;
    set(arg0: number, arg1: number, arg2: number): VkBufferOpaqueCaptureAddressCreateInfo;
    set(arg0: VkBufferOpaqueCaptureAddressCreateInfo): VkBufferOpaqueCaptureAddressCreateInfo;
    sizeof(): number;
}