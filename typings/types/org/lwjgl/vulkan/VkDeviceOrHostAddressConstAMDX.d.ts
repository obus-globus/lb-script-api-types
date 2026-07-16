import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDeviceOrHostAddressConstAMDX extends Struct<VkDeviceOrHostAddressConstAMDX> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICEADDRESS: number;
    static HOSTADDRESS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkDeviceOrHostAddressConstAMDX;
    static calloc(paramarg0: MemoryStack): VkDeviceOrHostAddressConstAMDX;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceOrHostAddressConstAMDX;
    static create(paramarg0: number): VkDeviceOrHostAddressConstAMDX;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceOrHostAddressConstAMDX;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceOrHostAddressConstAMDX;
    static malloc(paramarg0: MemoryStack): VkDeviceOrHostAddressConstAMDX;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndeviceAddress(paramarg0: number): number;
    static ndeviceAddress(paramarg0: number, paramarg1: number): void;
    static nhostAddress(paramarg0: number): number;
    static nhostAddress(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDeviceOrHostAddressConstAMDX;
    deviceAddress(): number;
    deviceAddress(arg0: number): VkDeviceOrHostAddressConstAMDX;
    hostAddress(): number;
    hostAddress(arg0: number): VkDeviceOrHostAddressConstAMDX;
    set(arg0: VkDeviceOrHostAddressConstAMDX): VkDeviceOrHostAddressConstAMDX;
    sizeof(): number;
}