import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceGroupBindSparseInfo } from '../../../org/lwjgl/vulkan/VkDeviceGroupBindSparseInfo.d.ts'
export class VkDeviceGroupBindSparseInfoKHR extends VkDeviceGroupBindSparseInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MEMORYDEVICEINDEX: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESOURCEDEVICEINDEX: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDeviceGroupBindSparseInfo;
    static calloc(paramarg0: MemoryStack): VkDeviceGroupBindSparseInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkDeviceGroupBindSparseInfoKHR;
    static calloc(paramarg0: MemoryStack): VkDeviceGroupBindSparseInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceGroupBindSparseInfo;
    static create(paramarg0: number): VkDeviceGroupBindSparseInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkDeviceGroupBindSparseInfoKHR;
    static create(paramarg0: number): VkDeviceGroupBindSparseInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceGroupBindSparseInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceGroupBindSparseInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceGroupBindSparseInfo;
    static malloc(paramarg0: MemoryStack): VkDeviceGroupBindSparseInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkDeviceGroupBindSparseInfoKHR;
    static malloc(paramarg0: MemoryStack): VkDeviceGroupBindSparseInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmemoryDeviceIndex(paramarg0: number): number;
    static nmemoryDeviceIndex(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nresourceDeviceIndex(paramarg0: number): number;
    static nresourceDeviceIndex(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkDeviceGroupBindSparseInfoKHR;
    memoryDeviceIndex(): number;
    memoryDeviceIndex(arg0: number): VkDeviceGroupBindSparseInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkDeviceGroupBindSparseInfoKHR;
    resourceDeviceIndex(): number;
    resourceDeviceIndex(arg0: number): VkDeviceGroupBindSparseInfoKHR;
    sType(): number;
    sType(arg0: number): VkDeviceGroupBindSparseInfoKHR;
    sType$Default(): VkDeviceGroupBindSparseInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkDeviceGroupBindSparseInfoKHR;
    set(arg0: VkDeviceGroupBindSparseInfo): VkDeviceGroupBindSparseInfo;
    set(arg0: VkDeviceGroupBindSparseInfoKHR): VkDeviceGroupBindSparseInfoKHR;
}