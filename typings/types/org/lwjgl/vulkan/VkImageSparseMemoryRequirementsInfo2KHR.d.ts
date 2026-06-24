import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkImageSparseMemoryRequirementsInfo2 } from '../../../org/lwjgl/vulkan/VkImageSparseMemoryRequirementsInfo2.d.ts'
export class VkImageSparseMemoryRequirementsInfo2KHR extends VkImageSparseMemoryRequirementsInfo2 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkImageSparseMemoryRequirementsInfo2;
    static calloc(paramarg0: MemoryStack): VkImageSparseMemoryRequirementsInfo2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkImageSparseMemoryRequirementsInfo2KHR;
    static calloc(paramarg0: MemoryStack): VkImageSparseMemoryRequirementsInfo2KHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageSparseMemoryRequirementsInfo2;
    static create(paramarg0: number): VkImageSparseMemoryRequirementsInfo2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkImageSparseMemoryRequirementsInfo2KHR;
    static create(paramarg0: number): VkImageSparseMemoryRequirementsInfo2KHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageSparseMemoryRequirementsInfo2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageSparseMemoryRequirementsInfo2KHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageSparseMemoryRequirementsInfo2;
    static malloc(paramarg0: MemoryStack): VkImageSparseMemoryRequirementsInfo2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkImageSparseMemoryRequirementsInfo2KHR;
    static malloc(paramarg0: MemoryStack): VkImageSparseMemoryRequirementsInfo2KHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nimage(paramarg0: number): number;
    static nimage(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkImageSparseMemoryRequirementsInfo2KHR;
    image(): number;
    image(arg0: number): VkImageSparseMemoryRequirementsInfo2KHR;
    pNext(): number;
    pNext(arg0: number): VkImageSparseMemoryRequirementsInfo2KHR;
    sType(): number;
    sType(arg0: number): VkImageSparseMemoryRequirementsInfo2KHR;
    sType$Default(): VkImageSparseMemoryRequirementsInfo2KHR;
    set(arg0: number, arg1: number, arg2: number): VkImageSparseMemoryRequirementsInfo2KHR;
    set(arg0: VkImageSparseMemoryRequirementsInfo2): VkImageSparseMemoryRequirementsInfo2;
    set(arg0: VkImageSparseMemoryRequirementsInfo2KHR): VkImageSparseMemoryRequirementsInfo2KHR;
}