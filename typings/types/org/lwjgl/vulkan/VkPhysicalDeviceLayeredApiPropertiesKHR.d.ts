import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceLayeredApiVulkanPropertiesKHR } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceLayeredApiVulkanPropertiesKHR.d.ts'
export class VkPhysicalDeviceLayeredApiPropertiesKHR extends Struct<VkPhysicalDeviceLayeredApiPropertiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICEID: number;
    static DEVICENAME: number;
    static LAYEREDAPI: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static VENDORID: number;
    static calloc(): VkPhysicalDeviceLayeredApiPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceLayeredApiPropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceLayeredApiPropertiesKHR;
    static create(paramarg0: number): VkPhysicalDeviceLayeredApiPropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceLayeredApiPropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceLayeredApiPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceLayeredApiPropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndeviceID(paramarg0: number): number;
    static ndeviceName(paramarg0: number): ByteBuffer;
    static ndeviceNameString(paramarg0: number): string;
    static nlayeredAPI(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nvendorID(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceLayeredApiPropertiesKHR;
    deviceID(): number;
    deviceName(): ByteBuffer;
    deviceNameString(): string;
    layeredAPI(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceLayeredApiPropertiesKHR;
    pNext(arg0: VkPhysicalDeviceLayeredApiVulkanPropertiesKHR): VkPhysicalDeviceLayeredApiPropertiesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceLayeredApiPropertiesKHR;
    sType$Default(): VkPhysicalDeviceLayeredApiPropertiesKHR;
    set(arg0: number, arg1: number): VkPhysicalDeviceLayeredApiPropertiesKHR;
    set(arg0: VkPhysicalDeviceLayeredApiPropertiesKHR): VkPhysicalDeviceLayeredApiPropertiesKHR;
    sizeof(): number;
    vendorID(): number;
}