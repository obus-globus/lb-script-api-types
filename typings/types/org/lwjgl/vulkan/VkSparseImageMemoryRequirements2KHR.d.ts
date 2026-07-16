import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSparseImageMemoryRequirements } from '../../../org/lwjgl/vulkan/VkSparseImageMemoryRequirements.d.ts'
import type { VkSparseImageMemoryRequirements2 } from '../../../org/lwjgl/vulkan/VkSparseImageMemoryRequirements2.d.ts'
export class VkSparseImageMemoryRequirements2KHR extends VkSparseImageMemoryRequirements2 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MEMORYREQUIREMENTS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSparseImageMemoryRequirements2;
    static calloc(paramarg0: MemoryStack): VkSparseImageMemoryRequirements2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkSparseImageMemoryRequirements2KHR;
    static calloc(paramarg0: MemoryStack): VkSparseImageMemoryRequirements2KHR;
    static create(): VkSparseImageMemoryRequirements2;
    static create(paramarg0: number): VkSparseImageMemoryRequirements2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkSparseImageMemoryRequirements2KHR;
    static create(paramarg0: number): VkSparseImageMemoryRequirements2KHR;
    static createSafe(paramarg0: number): VkSparseImageMemoryRequirements2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSparseImageMemoryRequirements2KHR;
    static malloc(): VkSparseImageMemoryRequirements2;
    static malloc(paramarg0: MemoryStack): VkSparseImageMemoryRequirements2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkSparseImageMemoryRequirements2KHR;
    static malloc(paramarg0: MemoryStack): VkSparseImageMemoryRequirements2KHR;
    static nmemoryRequirements(paramarg0: number): VkSparseImageMemoryRequirements;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkSparseImageMemoryRequirements2KHR;
    pNext(): number;
    pNext(arg0: number): VkSparseImageMemoryRequirements2KHR;
    sType(): number;
    sType(arg0: number): VkSparseImageMemoryRequirements2KHR;
    sType$Default(): VkSparseImageMemoryRequirements2KHR;
    set(arg0: number, arg1: number): VkSparseImageMemoryRequirements2KHR;
    set(arg0: VkSparseImageMemoryRequirements2): VkSparseImageMemoryRequirements2;
    set(arg0: VkSparseImageMemoryRequirements2KHR): VkSparseImageMemoryRequirements2KHR;
}