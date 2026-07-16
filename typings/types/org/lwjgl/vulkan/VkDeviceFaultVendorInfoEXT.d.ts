import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDeviceFaultVendorInfoEXT extends Struct<VkDeviceFaultVendorInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTION: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static VENDORFAULTCODE: number;
    static VENDORFAULTDATA: number;
    static calloc(): VkDeviceFaultVendorInfoEXT;
    static calloc(paramarg0: MemoryStack): VkDeviceFaultVendorInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceFaultVendorInfoEXT;
    static create(paramarg0: number): VkDeviceFaultVendorInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceFaultVendorInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceFaultVendorInfoEXT;
    static malloc(paramarg0: MemoryStack): VkDeviceFaultVendorInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndescription(paramarg0: number): ByteBuffer;
    static ndescription(paramarg0: number, paramarg1: ByteBuffer): void;
    static ndescriptionString(paramarg0: number): string;
    static nvendorFaultCode(paramarg0: number): number;
    static nvendorFaultCode(paramarg0: number, paramarg1: number): void;
    static nvendorFaultData(paramarg0: number): number;
    static nvendorFaultData(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDeviceFaultVendorInfoEXT;
    description(): ByteBuffer;
    description(arg0: ByteBuffer): VkDeviceFaultVendorInfoEXT;
    descriptionString(): string;
    set(arg0: ByteBuffer, arg1: number, arg2: number): VkDeviceFaultVendorInfoEXT;
    set(arg0: VkDeviceFaultVendorInfoEXT): VkDeviceFaultVendorInfoEXT;
    sizeof(): number;
    vendorFaultCode(): number;
    vendorFaultCode(arg0: number): VkDeviceFaultVendorInfoEXT;
    vendorFaultData(): number;
    vendorFaultData(arg0: number): VkDeviceFaultVendorInfoEXT;
}