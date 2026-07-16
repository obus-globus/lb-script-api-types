import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceIDProperties } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceIDProperties.d.ts'
export class VkPhysicalDeviceIDPropertiesKHR extends VkPhysicalDeviceIDProperties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICELUID: number;
    static DEVICELUIDVALID: number;
    static DEVICENODEMASK: number;
    static DEVICEUUID: number;
    static DRIVERUUID: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceIDProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceIDProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceIDPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceIDPropertiesKHR;
    static create(): VkPhysicalDeviceIDProperties;
    static create(paramarg0: number): VkPhysicalDeviceIDProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceIDPropertiesKHR;
    static create(paramarg0: number): VkPhysicalDeviceIDPropertiesKHR;
    static createSafe(paramarg0: number): VkPhysicalDeviceIDProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceIDPropertiesKHR;
    static malloc(): VkPhysicalDeviceIDProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceIDProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceIDPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceIDPropertiesKHR;
    static ndeviceLUID(paramarg0: number, paramarg1: number): number;
    static ndeviceLUID(paramarg0: number): ByteBuffer;
    static ndeviceLUIDValid(paramarg0: number): number;
    static ndeviceNodeMask(paramarg0: number): number;
    static ndeviceUUID(paramarg0: number, paramarg1: number): number;
    static ndeviceUUID(paramarg0: number): ByteBuffer;
    static ndriverUUID(paramarg0: number, paramarg1: number): number;
    static ndriverUUID(paramarg0: number): ByteBuffer;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceIDPropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceIDPropertiesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceIDPropertiesKHR;
    sType$Default(): VkPhysicalDeviceIDPropertiesKHR;
    set(arg0: number, arg1: number): VkPhysicalDeviceIDPropertiesKHR;
    set(arg0: VkPhysicalDeviceIDProperties): VkPhysicalDeviceIDProperties;
    set(arg0: VkPhysicalDeviceIDPropertiesKHR): VkPhysicalDeviceIDPropertiesKHR;
}