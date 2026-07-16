import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceExternalImageFormatInfo } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceExternalImageFormatInfo.d.ts'
export class VkPhysicalDeviceExternalImageFormatInfoKHR extends VkPhysicalDeviceExternalImageFormatInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HANDLETYPE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceExternalImageFormatInfo;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalImageFormatInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceExternalImageFormatInfoKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalImageFormatInfoKHR;
    static create(): VkPhysicalDeviceExternalImageFormatInfo;
    static create(paramarg0: number): VkPhysicalDeviceExternalImageFormatInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceExternalImageFormatInfoKHR;
    static create(paramarg0: number): VkPhysicalDeviceExternalImageFormatInfoKHR;
    static createSafe(paramarg0: number): VkPhysicalDeviceExternalImageFormatInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceExternalImageFormatInfoKHR;
    static malloc(): VkPhysicalDeviceExternalImageFormatInfo;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalImageFormatInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceExternalImageFormatInfoKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalImageFormatInfoKHR;
    static nhandleType(paramarg0: number): number;
    static nhandleType(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceExternalImageFormatInfoKHR;
    handleType(): number;
    handleType(arg0: number): VkPhysicalDeviceExternalImageFormatInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceExternalImageFormatInfoKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceExternalImageFormatInfoKHR;
    sType$Default(): VkPhysicalDeviceExternalImageFormatInfoKHR;
    set(arg0: number, arg1: number, arg2: number): VkPhysicalDeviceExternalImageFormatInfoKHR;
    set(arg0: VkPhysicalDeviceExternalImageFormatInfo): VkPhysicalDeviceExternalImageFormatInfo;
    set(arg0: VkPhysicalDeviceExternalImageFormatInfoKHR): VkPhysicalDeviceExternalImageFormatInfoKHR;
}