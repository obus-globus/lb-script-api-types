import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDevicePointClippingProperties } from '../../../org/lwjgl/vulkan/VkPhysicalDevicePointClippingProperties.d.ts'
export class VkPhysicalDevicePointClippingPropertiesKHR extends VkPhysicalDevicePointClippingProperties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTCLIPPINGBEHAVIOR: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDevicePointClippingProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePointClippingProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDevicePointClippingPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePointClippingPropertiesKHR;
    static create(): VkPhysicalDevicePointClippingProperties;
    static create(paramarg0: number): VkPhysicalDevicePointClippingProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDevicePointClippingPropertiesKHR;
    static create(paramarg0: number): VkPhysicalDevicePointClippingPropertiesKHR;
    static createSafe(paramarg0: number): VkPhysicalDevicePointClippingProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevicePointClippingPropertiesKHR;
    static malloc(): VkPhysicalDevicePointClippingProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePointClippingProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDevicePointClippingPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePointClippingPropertiesKHR;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npointClippingBehavior(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDevicePointClippingPropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDevicePointClippingPropertiesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDevicePointClippingPropertiesKHR;
    sType$Default(): VkPhysicalDevicePointClippingPropertiesKHR;
    set(arg0: number, arg1: number): VkPhysicalDevicePointClippingPropertiesKHR;
    set(arg0: VkPhysicalDevicePointClippingProperties): VkPhysicalDevicePointClippingProperties;
    set(arg0: VkPhysicalDevicePointClippingPropertiesKHR): VkPhysicalDevicePointClippingPropertiesKHR;
}