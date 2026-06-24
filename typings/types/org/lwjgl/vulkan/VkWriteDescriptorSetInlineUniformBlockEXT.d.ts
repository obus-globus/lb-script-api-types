import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkWriteDescriptorSetInlineUniformBlock } from '../../../org/lwjgl/vulkan/VkWriteDescriptorSetInlineUniformBlock.d.ts'
export class VkWriteDescriptorSetInlineUniformBlockEXT extends VkWriteDescriptorSetInlineUniformBlock {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATASIZE: number;
    static PDATA: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkWriteDescriptorSetInlineUniformBlock;
    static calloc(paramarg0: MemoryStack): VkWriteDescriptorSetInlineUniformBlock;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkWriteDescriptorSetInlineUniformBlockEXT;
    static calloc(paramarg0: MemoryStack): VkWriteDescriptorSetInlineUniformBlockEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkWriteDescriptorSetInlineUniformBlock;
    static create(paramarg0: number): VkWriteDescriptorSetInlineUniformBlock;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkWriteDescriptorSetInlineUniformBlockEXT;
    static create(paramarg0: number): VkWriteDescriptorSetInlineUniformBlockEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkWriteDescriptorSetInlineUniformBlock;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkWriteDescriptorSetInlineUniformBlockEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkWriteDescriptorSetInlineUniformBlock;
    static malloc(paramarg0: MemoryStack): VkWriteDescriptorSetInlineUniformBlock;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkWriteDescriptorSetInlineUniformBlockEXT;
    static malloc(paramarg0: MemoryStack): VkWriteDescriptorSetInlineUniformBlockEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndataSize(paramarg0: number): number;
    static ndataSize(paramarg0: number, paramarg1: number): void;
    static npData(paramarg0: number): ByteBuffer;
    static npData(paramarg0: number, paramarg1: ByteBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkWriteDescriptorSetInlineUniformBlockEXT;
    pData(): ByteBuffer;
    pData(arg0: ByteBuffer): VkWriteDescriptorSetInlineUniformBlockEXT;
    pNext(): number;
    pNext(arg0: number): VkWriteDescriptorSetInlineUniformBlockEXT;
    sType(): number;
    sType(arg0: number): VkWriteDescriptorSetInlineUniformBlockEXT;
    sType$Default(): VkWriteDescriptorSetInlineUniformBlockEXT;
    set(arg0: number, arg1: number, arg2: ByteBuffer): VkWriteDescriptorSetInlineUniformBlockEXT;
    set(arg0: VkWriteDescriptorSetInlineUniformBlock): VkWriteDescriptorSetInlineUniformBlock;
    set(arg0: VkWriteDescriptorSetInlineUniformBlockEXT): VkWriteDescriptorSetInlineUniformBlockEXT;
}