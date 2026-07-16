import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceLimits } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceLimits.d.ts'
import type { VkPhysicalDeviceSparseProperties } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceSparseProperties.d.ts'
export class VkPhysicalDeviceProperties extends Struct<VkPhysicalDeviceProperties> implements NativeResource {
    static ALIGNOF: number;
    static APIVERSION: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICEID: number;
    static DEVICENAME: number;
    static DEVICETYPE: number;
    static DRIVERVERSION: number;
    static LIMITS: number;
    static PIPELINECACHEUUID: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SPARSEPROPERTIES: number;
    static VENDORID: number;
    static calloc(): VkPhysicalDeviceProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceProperties;
    static create(paramarg0: number): VkPhysicalDeviceProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static napiVersion(paramarg0: number): number;
    static ndeviceID(paramarg0: number): number;
    static ndeviceName(paramarg0: number): ByteBuffer;
    static ndeviceNameString(paramarg0: number): string;
    static ndeviceType(paramarg0: number): number;
    static ndriverVersion(paramarg0: number): number;
    static nlimits(paramarg0: number): VkPhysicalDeviceLimits;
    static npipelineCacheUUID(paramarg0: number, paramarg1: number): number;
    static npipelineCacheUUID(paramarg0: number): ByteBuffer;
    static nsparseProperties(paramarg0: number): VkPhysicalDeviceSparseProperties;
    static nvendorID(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    apiVersion(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceProperties;
    deviceID(): number;
    deviceName(): ByteBuffer;
    deviceNameString(): string;
    deviceType(): number;
    driverVersion(): number;
    limits(): VkPhysicalDeviceLimits;
    pipelineCacheUUID(): ByteBuffer;
    pipelineCacheUUID(arg0: number): number;
    sizeof(): number;
    sparseProperties(): VkPhysicalDeviceSparseProperties;
    vendorID(): number;
}