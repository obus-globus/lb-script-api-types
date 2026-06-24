import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExportSemaphoreCreateInfo } from '../../../org/lwjgl/vulkan/VkExportSemaphoreCreateInfo.d.ts'
export class VkExportSemaphoreCreateInfoKHR extends VkExportSemaphoreCreateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HANDLETYPES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkExportSemaphoreCreateInfo;
    static calloc(paramarg0: MemoryStack): VkExportSemaphoreCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkExportSemaphoreCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkExportSemaphoreCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkExportSemaphoreCreateInfo;
    static create(paramarg0: number): VkExportSemaphoreCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkExportSemaphoreCreateInfoKHR;
    static create(paramarg0: number): VkExportSemaphoreCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExportSemaphoreCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExportSemaphoreCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkExportSemaphoreCreateInfo;
    static malloc(paramarg0: MemoryStack): VkExportSemaphoreCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkExportSemaphoreCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkExportSemaphoreCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nhandleTypes(paramarg0: number): number;
    static nhandleTypes(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkExportSemaphoreCreateInfoKHR;
    handleTypes(): number;
    handleTypes(arg0: number): VkExportSemaphoreCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkExportSemaphoreCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkExportSemaphoreCreateInfoKHR;
    sType$Default(): VkExportSemaphoreCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number): VkExportSemaphoreCreateInfoKHR;
    set(arg0: VkExportSemaphoreCreateInfo): VkExportSemaphoreCreateInfo;
    set(arg0: VkExportSemaphoreCreateInfoKHR): VkExportSemaphoreCreateInfoKHR;
}