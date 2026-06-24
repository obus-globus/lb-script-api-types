import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkStridedDeviceAddressNV extends Struct<VkStridedDeviceAddressNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STARTADDRESS: number;
    static STRIDEINBYTES: number;
    static calloc(): VkStridedDeviceAddressNV;
    static calloc(paramarg0: MemoryStack): VkStridedDeviceAddressNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkStridedDeviceAddressNV;
    static create(paramarg0: number): VkStridedDeviceAddressNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkStridedDeviceAddressNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkStridedDeviceAddressNV;
    static malloc(paramarg0: MemoryStack): VkStridedDeviceAddressNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nstartAddress(paramarg0: number): number;
    static nstartAddress(paramarg0: number, paramarg1: number): void;
    static nstrideInBytes(paramarg0: number): number;
    static nstrideInBytes(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkStridedDeviceAddressNV;
    set(arg0: number, arg1: number): VkStridedDeviceAddressNV;
    set(arg0: VkStridedDeviceAddressNV): VkStridedDeviceAddressNV;
    sizeof(): number;
    startAddress(): number;
    startAddress(arg0: number): VkStridedDeviceAddressNV;
    strideInBytes(): number;
    strideInBytes(arg0: number): VkStridedDeviceAddressNV;
}