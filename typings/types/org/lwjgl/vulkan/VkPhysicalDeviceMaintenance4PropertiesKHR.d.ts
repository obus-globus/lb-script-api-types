import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceMaintenance4Properties } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceMaintenance4Properties.d.ts'
export class VkPhysicalDeviceMaintenance4PropertiesKHR extends VkPhysicalDeviceMaintenance4Properties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXBUFFERSIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMaintenance4Properties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance4Properties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceMaintenance4PropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance4PropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceMaintenance4Properties;
    static create(paramarg0: number): VkPhysicalDeviceMaintenance4Properties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceMaintenance4PropertiesKHR;
    static create(paramarg0: number): VkPhysicalDeviceMaintenance4PropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMaintenance4Properties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMaintenance4PropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceMaintenance4Properties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance4Properties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceMaintenance4PropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance4PropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxBufferSize(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMaintenance4PropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMaintenance4PropertiesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMaintenance4PropertiesKHR;
    sType$Default(): VkPhysicalDeviceMaintenance4PropertiesKHR;
    set(arg0: number, arg1: number): VkPhysicalDeviceMaintenance4PropertiesKHR;
    set(arg0: VkPhysicalDeviceMaintenance4Properties): VkPhysicalDeviceMaintenance4Properties;
    set(arg0: VkPhysicalDeviceMaintenance4PropertiesKHR): VkPhysicalDeviceMaintenance4PropertiesKHR;
}