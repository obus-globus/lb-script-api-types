import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceGroupProperties } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceGroupProperties.d.ts'
export class VkPhysicalDeviceGroupPropertiesKHR extends VkPhysicalDeviceGroupProperties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PHYSICALDEVICECOUNT: number;
    static PHYSICALDEVICES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUBSETALLOCATION: number;
    static calloc(): VkPhysicalDeviceGroupProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceGroupProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceGroupPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceGroupPropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceGroupProperties;
    static create(paramarg0: number): VkPhysicalDeviceGroupProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceGroupPropertiesKHR;
    static create(paramarg0: number): VkPhysicalDeviceGroupPropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceGroupProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceGroupPropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceGroupProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceGroupProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceGroupPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceGroupPropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nphysicalDeviceCount(paramarg0: number): number;
    static nphysicalDevices(paramarg0: number, paramarg1: number): number;
    static nphysicalDevices(paramarg0: number): PointerBuffer;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsubsetAllocation(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceGroupPropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceGroupPropertiesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceGroupPropertiesKHR;
    sType$Default(): VkPhysicalDeviceGroupPropertiesKHR;
    set(arg0: number, arg1: number): VkPhysicalDeviceGroupPropertiesKHR;
    set(arg0: VkPhysicalDeviceGroupProperties): VkPhysicalDeviceGroupProperties;
    set(arg0: VkPhysicalDeviceGroupPropertiesKHR): VkPhysicalDeviceGroupPropertiesKHR;
}