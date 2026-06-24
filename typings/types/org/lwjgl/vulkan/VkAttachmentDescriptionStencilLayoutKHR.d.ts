import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAttachmentDescriptionStencilLayout } from '../../../org/lwjgl/vulkan/VkAttachmentDescriptionStencilLayout.d.ts'
export class VkAttachmentDescriptionStencilLayoutKHR extends VkAttachmentDescriptionStencilLayout {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STENCILFINALLAYOUT: number;
    static STENCILINITIALLAYOUT: number;
    static STYPE: number;
    static calloc(): VkAttachmentDescriptionStencilLayout;
    static calloc(paramarg0: MemoryStack): VkAttachmentDescriptionStencilLayout;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkAttachmentDescriptionStencilLayoutKHR;
    static calloc(paramarg0: MemoryStack): VkAttachmentDescriptionStencilLayoutKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAttachmentDescriptionStencilLayout;
    static create(paramarg0: number): VkAttachmentDescriptionStencilLayout;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkAttachmentDescriptionStencilLayoutKHR;
    static create(paramarg0: number): VkAttachmentDescriptionStencilLayoutKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAttachmentDescriptionStencilLayout;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAttachmentDescriptionStencilLayoutKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAttachmentDescriptionStencilLayout;
    static malloc(paramarg0: MemoryStack): VkAttachmentDescriptionStencilLayout;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkAttachmentDescriptionStencilLayoutKHR;
    static malloc(paramarg0: MemoryStack): VkAttachmentDescriptionStencilLayoutKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstencilFinalLayout(paramarg0: number): number;
    static nstencilFinalLayout(paramarg0: number, paramarg1: number): void;
    static nstencilInitialLayout(paramarg0: number): number;
    static nstencilInitialLayout(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkAttachmentDescriptionStencilLayoutKHR;
    pNext(): number;
    pNext(arg0: number): VkAttachmentDescriptionStencilLayoutKHR;
    sType(): number;
    sType(arg0: number): VkAttachmentDescriptionStencilLayoutKHR;
    sType$Default(): VkAttachmentDescriptionStencilLayoutKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkAttachmentDescriptionStencilLayoutKHR;
    set(arg0: VkAttachmentDescriptionStencilLayout): VkAttachmentDescriptionStencilLayout;
    set(arg0: VkAttachmentDescriptionStencilLayoutKHR): VkAttachmentDescriptionStencilLayoutKHR;
    stencilFinalLayout(): number;
    stencilFinalLayout(arg0: number): VkAttachmentDescriptionStencilLayoutKHR;
    stencilInitialLayout(): number;
    stencilInitialLayout(arg0: number): VkAttachmentDescriptionStencilLayoutKHR;
}