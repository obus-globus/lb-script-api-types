import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDescriptorUpdateTemplateEntry } from '../../../org/lwjgl/vulkan/VkDescriptorUpdateTemplateEntry.d.ts'
export class VkDescriptorUpdateTemplateEntryKHR extends VkDescriptorUpdateTemplateEntry {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTORCOUNT: number;
    static DESCRIPTORTYPE: number;
    static DSTARRAYELEMENT: number;
    static DSTBINDING: number;
    static OFFSET: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STRIDE: number;
    static calloc(): VkDescriptorUpdateTemplateEntry;
    static calloc(paramarg0: MemoryStack): VkDescriptorUpdateTemplateEntry;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkDescriptorUpdateTemplateEntryKHR;
    static calloc(paramarg0: MemoryStack): VkDescriptorUpdateTemplateEntryKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorUpdateTemplateEntry;
    static create(paramarg0: number): VkDescriptorUpdateTemplateEntry;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkDescriptorUpdateTemplateEntryKHR;
    static create(paramarg0: number): VkDescriptorUpdateTemplateEntryKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorUpdateTemplateEntry;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorUpdateTemplateEntryKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorUpdateTemplateEntry;
    static malloc(paramarg0: MemoryStack): VkDescriptorUpdateTemplateEntry;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkDescriptorUpdateTemplateEntryKHR;
    static malloc(paramarg0: MemoryStack): VkDescriptorUpdateTemplateEntryKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndescriptorCount(paramarg0: number): number;
    static ndescriptorCount(paramarg0: number, paramarg1: number): void;
    static ndescriptorType(paramarg0: number): number;
    static ndescriptorType(paramarg0: number, paramarg1: number): void;
    static ndstArrayElement(paramarg0: number): number;
    static ndstArrayElement(paramarg0: number, paramarg1: number): void;
    static ndstBinding(paramarg0: number): number;
    static ndstBinding(paramarg0: number, paramarg1: number): void;
    static noffset(paramarg0: number): number;
    static noffset(paramarg0: number, paramarg1: number): void;
    static nstride(paramarg0: number): number;
    static nstride(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkDescriptorUpdateTemplateEntryKHR;
    descriptorCount(): number;
    descriptorCount(arg0: number): VkDescriptorUpdateTemplateEntryKHR;
    descriptorType(): number;
    descriptorType(arg0: number): VkDescriptorUpdateTemplateEntryKHR;
    dstArrayElement(): number;
    dstArrayElement(arg0: number): VkDescriptorUpdateTemplateEntryKHR;
    dstBinding(): number;
    dstBinding(arg0: number): VkDescriptorUpdateTemplateEntryKHR;
    offset(): number;
    offset(arg0: number): VkDescriptorUpdateTemplateEntryKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkDescriptorUpdateTemplateEntryKHR;
    set(arg0: VkDescriptorUpdateTemplateEntry): VkDescriptorUpdateTemplateEntry;
    set(arg0: VkDescriptorUpdateTemplateEntryKHR): VkDescriptorUpdateTemplateEntryKHR;
    stride(): number;
    stride(arg0: number): VkDescriptorUpdateTemplateEntryKHR;
}