import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDeviceFaultAddressInfoEXT extends Struct<VkDeviceFaultAddressInfoEXT> implements NativeResource {
    static ADDRESSPRECISION: number;
    static ADDRESSTYPE: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REPORTEDADDRESS: number;
    static SIZEOF: number;
    static calloc(): VkDeviceFaultAddressInfoEXT;
    static calloc(paramarg0: MemoryStack): VkDeviceFaultAddressInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceFaultAddressInfoEXT;
    static create(paramarg0: number): VkDeviceFaultAddressInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceFaultAddressInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceFaultAddressInfoEXT;
    static malloc(paramarg0: MemoryStack): VkDeviceFaultAddressInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naddressPrecision(paramarg0: number): number;
    static naddressPrecision(paramarg0: number, paramarg1: number): void;
    static naddressType(paramarg0: number): number;
    static naddressType(paramarg0: number, paramarg1: number): void;
    static nreportedAddress(paramarg0: number): number;
    static nreportedAddress(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    addressPrecision(): number;
    addressPrecision(arg0: number): VkDeviceFaultAddressInfoEXT;
    addressType(): number;
    addressType(arg0: number): VkDeviceFaultAddressInfoEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDeviceFaultAddressInfoEXT;
    reportedAddress(): number;
    reportedAddress(arg0: number): VkDeviceFaultAddressInfoEXT;
    set(arg0: number, arg1: number, arg2: number): VkDeviceFaultAddressInfoEXT;
    set(arg0: VkDeviceFaultAddressInfoEXT): VkDeviceFaultAddressInfoEXT;
    sizeof(): number;
}