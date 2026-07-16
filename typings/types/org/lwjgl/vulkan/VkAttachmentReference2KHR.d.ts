import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAttachmentReference2 } from '../../../org/lwjgl/vulkan/VkAttachmentReference2.d.ts'
import type { VkAttachmentReferenceStencilLayout } from '../../../org/lwjgl/vulkan/VkAttachmentReferenceStencilLayout.d.ts'
import type { VkAttachmentReferenceStencilLayoutKHR } from '../../../org/lwjgl/vulkan/VkAttachmentReferenceStencilLayoutKHR.d.ts'
export class VkAttachmentReference2KHR extends VkAttachmentReference2 {
    static ALIGNOF: number;
    static ASPECTMASK: number;
    static ATTACHMENT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LAYOUT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkAttachmentReference2;
    static calloc(paramarg0: MemoryStack): VkAttachmentReference2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkAttachmentReference2KHR;
    static calloc(paramarg0: MemoryStack): VkAttachmentReference2KHR;
    static create(): VkAttachmentReference2;
    static create(paramarg0: number): VkAttachmentReference2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkAttachmentReference2KHR;
    static create(paramarg0: number): VkAttachmentReference2KHR;
    static createSafe(paramarg0: number): VkAttachmentReference2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAttachmentReference2KHR;
    static malloc(): VkAttachmentReference2;
    static malloc(paramarg0: MemoryStack): VkAttachmentReference2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkAttachmentReference2KHR;
    static malloc(paramarg0: MemoryStack): VkAttachmentReference2KHR;
    static naspectMask(paramarg0: number): number;
    static naspectMask(paramarg0: number, paramarg1: number): void;
    static nattachment(paramarg0: number): number;
    static nattachment(paramarg0: number, paramarg1: number): void;
    static nlayout(paramarg0: number): number;
    static nlayout(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    aspectMask(): number;
    aspectMask(arg0: number): VkAttachmentReference2KHR;
    attachment(): number;
    attachment(arg0: number): VkAttachmentReference2KHR;
    create(arg0: number, arg1: ByteBuffer): VkAttachmentReference2KHR;
    layout(): number;
    layout(arg0: number): VkAttachmentReference2KHR;
    pNext(): number;
    pNext(arg0: number): VkAttachmentReference2KHR;
    pNext(arg0: VkAttachmentReferenceStencilLayout): VkAttachmentReference2;
    pNext(arg0: VkAttachmentReferenceStencilLayoutKHR): VkAttachmentReference2;
    sType(): number;
    sType(arg0: number): VkAttachmentReference2KHR;
    sType$Default(): VkAttachmentReference2KHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkAttachmentReference2KHR;
    set(arg0: VkAttachmentReference2): VkAttachmentReference2;
    set(arg0: VkAttachmentReference2KHR): VkAttachmentReference2KHR;
}