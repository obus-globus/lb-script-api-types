import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceExternalFenceInfo } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceExternalFenceInfo.d.ts'
export class VkPhysicalDeviceExternalFenceInfoKHR extends VkPhysicalDeviceExternalFenceInfo {
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
    static calloc(): VkPhysicalDeviceExternalFenceInfo;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalFenceInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceExternalFenceInfoKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalFenceInfoKHR;
    static create(): VkPhysicalDeviceExternalFenceInfo;
    static create(paramarg0: number): VkPhysicalDeviceExternalFenceInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceExternalFenceInfoKHR;
    static create(paramarg0: number): VkPhysicalDeviceExternalFenceInfoKHR;
    static createSafe(paramarg0: number): VkPhysicalDeviceExternalFenceInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceExternalFenceInfoKHR;
    static malloc(): VkPhysicalDeviceExternalFenceInfo;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalFenceInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceExternalFenceInfoKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalFenceInfoKHR;
    static nhandleType(paramarg0: number): number;
    static nhandleType(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceExternalFenceInfoKHR;
    handleType(): number;
    handleType(arg0: number): VkPhysicalDeviceExternalFenceInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceExternalFenceInfoKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceExternalFenceInfoKHR;
    sType$Default(): VkPhysicalDeviceExternalFenceInfoKHR;
    set(arg0: number, arg1: number, arg2: number): VkPhysicalDeviceExternalFenceInfoKHR;
    set(arg0: VkPhysicalDeviceExternalFenceInfo): VkPhysicalDeviceExternalFenceInfo;
    set(arg0: VkPhysicalDeviceExternalFenceInfoKHR): VkPhysicalDeviceExternalFenceInfoKHR;
}