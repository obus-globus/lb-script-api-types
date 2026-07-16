import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExportFenceCreateInfo } from '../../../org/lwjgl/vulkan/VkExportFenceCreateInfo.d.ts'
export class VkExportFenceCreateInfoKHR extends VkExportFenceCreateInfo {
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
    static calloc(): VkExportFenceCreateInfo;
    static calloc(paramarg0: MemoryStack): VkExportFenceCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkExportFenceCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkExportFenceCreateInfoKHR;
    static create(): VkExportFenceCreateInfo;
    static create(paramarg0: number): VkExportFenceCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkExportFenceCreateInfoKHR;
    static create(paramarg0: number): VkExportFenceCreateInfoKHR;
    static createSafe(paramarg0: number): VkExportFenceCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExportFenceCreateInfoKHR;
    static malloc(): VkExportFenceCreateInfo;
    static malloc(paramarg0: MemoryStack): VkExportFenceCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkExportFenceCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkExportFenceCreateInfoKHR;
    static nhandleTypes(paramarg0: number): number;
    static nhandleTypes(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkExportFenceCreateInfoKHR;
    handleTypes(): number;
    handleTypes(arg0: number): VkExportFenceCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkExportFenceCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkExportFenceCreateInfoKHR;
    sType$Default(): VkExportFenceCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number): VkExportFenceCreateInfoKHR;
    set(arg0: VkExportFenceCreateInfo): VkExportFenceCreateInfo;
    set(arg0: VkExportFenceCreateInfoKHR): VkExportFenceCreateInfoKHR;
}