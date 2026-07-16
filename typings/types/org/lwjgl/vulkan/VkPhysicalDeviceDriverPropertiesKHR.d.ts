import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkConformanceVersion } from '../../../org/lwjgl/vulkan/VkConformanceVersion.d.ts'
import type { VkPhysicalDeviceDriverProperties } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceDriverProperties.d.ts'
export class VkPhysicalDeviceDriverPropertiesKHR extends VkPhysicalDeviceDriverProperties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CONFORMANCEVERSION: number;
    static DRIVERID: number;
    static DRIVERINFO: number;
    static DRIVERNAME: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceDriverProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDriverProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceDriverPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDriverPropertiesKHR;
    static create(): VkPhysicalDeviceDriverProperties;
    static create(paramarg0: number): VkPhysicalDeviceDriverProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceDriverPropertiesKHR;
    static create(paramarg0: number): VkPhysicalDeviceDriverPropertiesKHR;
    static createSafe(paramarg0: number): VkPhysicalDeviceDriverProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceDriverPropertiesKHR;
    static malloc(): VkPhysicalDeviceDriverProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDriverProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceDriverPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDriverPropertiesKHR;
    static nconformanceVersion(paramarg0: number): VkConformanceVersion;
    static ndriverID(paramarg0: number): number;
    static ndriverInfo(paramarg0: number): ByteBuffer;
    static ndriverInfoString(paramarg0: number): string;
    static ndriverName(paramarg0: number): ByteBuffer;
    static ndriverNameString(paramarg0: number): string;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceDriverPropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceDriverPropertiesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceDriverPropertiesKHR;
    sType$Default(): VkPhysicalDeviceDriverPropertiesKHR;
    set(arg0: number, arg1: number): VkPhysicalDeviceDriverPropertiesKHR;
    set(arg0: VkPhysicalDeviceDriverProperties): VkPhysicalDeviceDriverProperties;
    set(arg0: VkPhysicalDeviceDriverPropertiesKHR): VkPhysicalDeviceDriverPropertiesKHR;
}