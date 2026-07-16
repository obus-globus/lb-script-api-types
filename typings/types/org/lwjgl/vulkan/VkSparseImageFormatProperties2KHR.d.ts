import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSparseImageFormatProperties } from '../../../org/lwjgl/vulkan/VkSparseImageFormatProperties.d.ts'
import type { VkSparseImageFormatProperties2 } from '../../../org/lwjgl/vulkan/VkSparseImageFormatProperties2.d.ts'
export class VkSparseImageFormatProperties2KHR extends VkSparseImageFormatProperties2 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PROPERTIES: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSparseImageFormatProperties2;
    static calloc(paramarg0: MemoryStack): VkSparseImageFormatProperties2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkSparseImageFormatProperties2KHR;
    static calloc(paramarg0: MemoryStack): VkSparseImageFormatProperties2KHR;
    static create(): VkSparseImageFormatProperties2;
    static create(paramarg0: number): VkSparseImageFormatProperties2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkSparseImageFormatProperties2KHR;
    static create(paramarg0: number): VkSparseImageFormatProperties2KHR;
    static createSafe(paramarg0: number): VkSparseImageFormatProperties2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSparseImageFormatProperties2KHR;
    static malloc(): VkSparseImageFormatProperties2;
    static malloc(paramarg0: MemoryStack): VkSparseImageFormatProperties2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkSparseImageFormatProperties2KHR;
    static malloc(paramarg0: MemoryStack): VkSparseImageFormatProperties2KHR;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nproperties(paramarg0: number): VkSparseImageFormatProperties;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkSparseImageFormatProperties2KHR;
    pNext(): number;
    pNext(arg0: number): VkSparseImageFormatProperties2KHR;
    sType(): number;
    sType(arg0: number): VkSparseImageFormatProperties2KHR;
    sType$Default(): VkSparseImageFormatProperties2KHR;
    set(arg0: number, arg1: number): VkSparseImageFormatProperties2KHR;
    set(arg0: VkSparseImageFormatProperties2): VkSparseImageFormatProperties2;
    set(arg0: VkSparseImageFormatProperties2KHR): VkSparseImageFormatProperties2KHR;
}