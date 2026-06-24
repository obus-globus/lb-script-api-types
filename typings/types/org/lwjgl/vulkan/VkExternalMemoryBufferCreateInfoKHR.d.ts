import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExternalMemoryBufferCreateInfo } from '../../../org/lwjgl/vulkan/VkExternalMemoryBufferCreateInfo.d.ts'
export class VkExternalMemoryBufferCreateInfoKHR extends VkExternalMemoryBufferCreateInfo {
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
    static calloc(): VkExternalMemoryBufferCreateInfo;
    static calloc(paramarg0: MemoryStack): VkExternalMemoryBufferCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkExternalMemoryBufferCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkExternalMemoryBufferCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkExternalMemoryBufferCreateInfo;
    static create(paramarg0: number): VkExternalMemoryBufferCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkExternalMemoryBufferCreateInfoKHR;
    static create(paramarg0: number): VkExternalMemoryBufferCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExternalMemoryBufferCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExternalMemoryBufferCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkExternalMemoryBufferCreateInfo;
    static malloc(paramarg0: MemoryStack): VkExternalMemoryBufferCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkExternalMemoryBufferCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkExternalMemoryBufferCreateInfoKHR;
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
    create(arg0: number, arg1: ByteBuffer): VkExternalMemoryBufferCreateInfoKHR;
    handleTypes(): number;
    handleTypes(arg0: number): VkExternalMemoryBufferCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkExternalMemoryBufferCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkExternalMemoryBufferCreateInfoKHR;
    sType$Default(): VkExternalMemoryBufferCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number): VkExternalMemoryBufferCreateInfoKHR;
    set(arg0: VkExternalMemoryBufferCreateInfo): VkExternalMemoryBufferCreateInfo;
    set(arg0: VkExternalMemoryBufferCreateInfoKHR): VkExternalMemoryBufferCreateInfoKHR;
}