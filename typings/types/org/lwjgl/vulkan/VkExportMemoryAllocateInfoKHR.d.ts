import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExportMemoryAllocateInfo } from '../../../org/lwjgl/vulkan/VkExportMemoryAllocateInfo.d.ts'
export class VkExportMemoryAllocateInfoKHR extends VkExportMemoryAllocateInfo {
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
    static calloc(): VkExportMemoryAllocateInfo;
    static calloc(paramarg0: MemoryStack): VkExportMemoryAllocateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkExportMemoryAllocateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkExportMemoryAllocateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkExportMemoryAllocateInfo;
    static create(paramarg0: number): VkExportMemoryAllocateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkExportMemoryAllocateInfoKHR;
    static create(paramarg0: number): VkExportMemoryAllocateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExportMemoryAllocateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExportMemoryAllocateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkExportMemoryAllocateInfo;
    static malloc(paramarg0: MemoryStack): VkExportMemoryAllocateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkExportMemoryAllocateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkExportMemoryAllocateInfoKHR;
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
    create(arg0: number, arg1: ByteBuffer): VkExportMemoryAllocateInfoKHR;
    handleTypes(): number;
    handleTypes(arg0: number): VkExportMemoryAllocateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkExportMemoryAllocateInfoKHR;
    sType(): number;
    sType(arg0: number): VkExportMemoryAllocateInfoKHR;
    sType$Default(): VkExportMemoryAllocateInfoKHR;
    set(arg0: number, arg1: number, arg2: number): VkExportMemoryAllocateInfoKHR;
    set(arg0: VkExportMemoryAllocateInfo): VkExportMemoryAllocateInfo;
    set(arg0: VkExportMemoryAllocateInfoKHR): VkExportMemoryAllocateInfoKHR;
}