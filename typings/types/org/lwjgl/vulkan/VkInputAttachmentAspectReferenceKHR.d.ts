import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkInputAttachmentAspectReference } from '../../../org/lwjgl/vulkan/VkInputAttachmentAspectReference.d.ts'
export class VkInputAttachmentAspectReferenceKHR extends VkInputAttachmentAspectReference {
    static ALIGNOF: number;
    static ASPECTMASK: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INPUTATTACHMENTINDEX: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SUBPASS: number;
    static calloc(): VkInputAttachmentAspectReference;
    static calloc(paramarg0: MemoryStack): VkInputAttachmentAspectReference;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkInputAttachmentAspectReferenceKHR;
    static calloc(paramarg0: MemoryStack): VkInputAttachmentAspectReferenceKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkInputAttachmentAspectReference;
    static create(paramarg0: number): VkInputAttachmentAspectReference;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkInputAttachmentAspectReferenceKHR;
    static create(paramarg0: number): VkInputAttachmentAspectReferenceKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkInputAttachmentAspectReference;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkInputAttachmentAspectReferenceKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkInputAttachmentAspectReference;
    static malloc(paramarg0: MemoryStack): VkInputAttachmentAspectReference;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkInputAttachmentAspectReferenceKHR;
    static malloc(paramarg0: MemoryStack): VkInputAttachmentAspectReferenceKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naspectMask(paramarg0: number): number;
    static naspectMask(paramarg0: number, paramarg1: number): void;
    static ninputAttachmentIndex(paramarg0: number): number;
    static ninputAttachmentIndex(paramarg0: number, paramarg1: number): void;
    static nsubpass(paramarg0: number): number;
    static nsubpass(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    aspectMask(): number;
    aspectMask(arg0: number): VkInputAttachmentAspectReferenceKHR;
    create(arg0: number, arg1: ByteBuffer): VkInputAttachmentAspectReferenceKHR;
    inputAttachmentIndex(): number;
    inputAttachmentIndex(arg0: number): VkInputAttachmentAspectReferenceKHR;
    set(arg0: number, arg1: number, arg2: number): VkInputAttachmentAspectReferenceKHR;
    set(arg0: VkInputAttachmentAspectReference): VkInputAttachmentAspectReference;
    set(arg0: VkInputAttachmentAspectReferenceKHR): VkInputAttachmentAspectReferenceKHR;
    subpass(): number;
    subpass(arg0: number): VkInputAttachmentAspectReferenceKHR;
}