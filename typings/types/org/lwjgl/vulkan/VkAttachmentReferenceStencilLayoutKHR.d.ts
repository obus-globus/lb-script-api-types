import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAttachmentReferenceStencilLayout } from '../../../org/lwjgl/vulkan/VkAttachmentReferenceStencilLayout.d.ts'
export class VkAttachmentReferenceStencilLayoutKHR extends VkAttachmentReferenceStencilLayout {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STENCILLAYOUT: number;
    static STYPE: number;
    static calloc(): VkAttachmentReferenceStencilLayout;
    static calloc(paramarg0: MemoryStack): VkAttachmentReferenceStencilLayout;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkAttachmentReferenceStencilLayoutKHR;
    static calloc(paramarg0: MemoryStack): VkAttachmentReferenceStencilLayoutKHR;
    static create(): VkAttachmentReferenceStencilLayout;
    static create(paramarg0: number): VkAttachmentReferenceStencilLayout;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkAttachmentReferenceStencilLayoutKHR;
    static create(paramarg0: number): VkAttachmentReferenceStencilLayoutKHR;
    static createSafe(paramarg0: number): VkAttachmentReferenceStencilLayout;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAttachmentReferenceStencilLayoutKHR;
    static malloc(): VkAttachmentReferenceStencilLayout;
    static malloc(paramarg0: MemoryStack): VkAttachmentReferenceStencilLayout;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkAttachmentReferenceStencilLayoutKHR;
    static malloc(paramarg0: MemoryStack): VkAttachmentReferenceStencilLayoutKHR;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstencilLayout(paramarg0: number): number;
    static nstencilLayout(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkAttachmentReferenceStencilLayoutKHR;
    pNext(): number;
    pNext(arg0: number): VkAttachmentReferenceStencilLayoutKHR;
    sType(): number;
    sType(arg0: number): VkAttachmentReferenceStencilLayoutKHR;
    sType$Default(): VkAttachmentReferenceStencilLayoutKHR;
    set(arg0: number, arg1: number, arg2: number): VkAttachmentReferenceStencilLayoutKHR;
    set(arg0: VkAttachmentReferenceStencilLayout): VkAttachmentReferenceStencilLayout;
    set(arg0: VkAttachmentReferenceStencilLayoutKHR): VkAttachmentReferenceStencilLayoutKHR;
    stencilLayout(): number;
    stencilLayout(arg0: number): VkAttachmentReferenceStencilLayoutKHR;
}