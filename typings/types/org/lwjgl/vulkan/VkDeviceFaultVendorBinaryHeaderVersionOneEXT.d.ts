import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDeviceFaultVendorBinaryHeaderVersionOneEXT extends Struct<VkDeviceFaultVendorBinaryHeaderVersionOneEXT> implements NativeResource {
    static ALIGNOF: number;
    static APIVERSION: number;
    static APPLICATIONNAMEOFFSET: number;
    static APPLICATIONVERSION: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICEID: number;
    static DRIVERVERSION: number;
    static ENGINENAMEOFFSET: number;
    static ENGINEVERSION: number;
    static HEADERSIZE: number;
    static HEADERVERSION: number;
    static PIPELINECACHEUUID: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static VENDORID: number;
    static calloc(): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    static calloc(paramarg0: MemoryStack): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    static create(paramarg0: number): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    static malloc(paramarg0: MemoryStack): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static napiVersion(paramarg0: number): number;
    static napiVersion(paramarg0: number, paramarg1: number): void;
    static napplicationNameOffset(paramarg0: number): number;
    static napplicationNameOffset(paramarg0: number, paramarg1: number): void;
    static napplicationVersion(paramarg0: number): number;
    static napplicationVersion(paramarg0: number, paramarg1: number): void;
    static ndeviceID(paramarg0: number): number;
    static ndeviceID(paramarg0: number, paramarg1: number): void;
    static ndriverVersion(paramarg0: number): number;
    static ndriverVersion(paramarg0: number, paramarg1: number): void;
    static nengineNameOffset(paramarg0: number): number;
    static nengineNameOffset(paramarg0: number, paramarg1: number): void;
    static nengineVersion(paramarg0: number): number;
    static nengineVersion(paramarg0: number, paramarg1: number): void;
    static nheaderSize(paramarg0: number): number;
    static nheaderSize(paramarg0: number, paramarg1: number): void;
    static nheaderVersion(paramarg0: number): number;
    static nheaderVersion(paramarg0: number, paramarg1: number): void;
    static npipelineCacheUUID(paramarg0: number, paramarg1: number): number;
    static npipelineCacheUUID(paramarg0: number): ByteBuffer;
    static npipelineCacheUUID(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static npipelineCacheUUID(paramarg0: number, paramarg1: ByteBuffer): void;
    static nvendorID(paramarg0: number): number;
    static nvendorID(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    apiVersion(): number;
    apiVersion(arg0: number): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    applicationNameOffset(): number;
    applicationNameOffset(arg0: number): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    applicationVersion(): number;
    applicationVersion(arg0: number): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    deviceID(): number;
    deviceID(arg0: number): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    driverVersion(): number;
    driverVersion(arg0: number): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    engineNameOffset(): number;
    engineNameOffset(arg0: number): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    engineVersion(): number;
    engineVersion(arg0: number): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    headerSize(): number;
    headerSize(arg0: number): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    headerVersion(): number;
    headerVersion(arg0: number): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    pipelineCacheUUID(): ByteBuffer;
    pipelineCacheUUID(arg0: ByteBuffer): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    pipelineCacheUUID(arg0: number): number;
    pipelineCacheUUID(arg0: number, arg1: number): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: ByteBuffer, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    set(arg0: VkDeviceFaultVendorBinaryHeaderVersionOneEXT): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
    sizeof(): number;
    vendorID(): number;
    vendorID(arg0: number): VkDeviceFaultVendorBinaryHeaderVersionOneEXT;
}