import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkFramebufferAttachmentsCreateInfo } from '../../../org/lwjgl/vulkan/VkFramebufferAttachmentsCreateInfo.d.ts'
import type { VkFramebufferAttachmentsCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkFramebufferAttachmentsCreateInfoKHR.d.ts'
export class VkFramebufferCreateInfo extends Struct<VkFramebufferCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static ATTACHMENTCOUNT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static HEIGHT: number;
    static LAYERS: number;
    static PATTACHMENTS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RENDERPASS: number;
    static SIZEOF: number;
    static STYPE: number;
    static WIDTH: number;
    static calloc(): VkFramebufferCreateInfo;
    static calloc(paramarg0: MemoryStack): VkFramebufferCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkFramebufferCreateInfo;
    static create(paramarg0: number): VkFramebufferCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkFramebufferCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkFramebufferCreateInfo;
    static malloc(paramarg0: MemoryStack): VkFramebufferCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nattachmentCount(paramarg0: number): number;
    static nattachmentCount(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nheight(paramarg0: number): number;
    static nheight(paramarg0: number, paramarg1: number): void;
    static nlayers(paramarg0: number): number;
    static nlayers(paramarg0: number, paramarg1: number): void;
    static npAttachments(paramarg0: number): LongBuffer;
    static npAttachments(paramarg0: number, paramarg1: LongBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrenderPass(paramarg0: number): number;
    static nrenderPass(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nwidth(paramarg0: number): number;
    static nwidth(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    attachmentCount(): number;
    attachmentCount(arg0: number): VkFramebufferCreateInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkFramebufferCreateInfo;
    flags(): number;
    flags(arg0: number): VkFramebufferCreateInfo;
    height(): number;
    height(arg0: number): VkFramebufferCreateInfo;
    layers(): number;
    layers(arg0: number): VkFramebufferCreateInfo;
    pAttachments(): LongBuffer;
    pAttachments(arg0: LongBuffer): VkFramebufferCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkFramebufferCreateInfo;
    pNext(arg0: VkFramebufferAttachmentsCreateInfo): VkFramebufferCreateInfo;
    pNext(arg0: VkFramebufferAttachmentsCreateInfoKHR): VkFramebufferCreateInfo;
    renderPass(): number;
    renderPass(arg0: number): VkFramebufferCreateInfo;
    sType(): number;
    sType(arg0: number): VkFramebufferCreateInfo;
    sType$Default(): VkFramebufferCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: LongBuffer, arg6: number, arg7: number, arg8: number): VkFramebufferCreateInfo;
    set(arg0: VkFramebufferCreateInfo): VkFramebufferCreateInfo;
    sizeof(): number;
    width(): number;
    width(arg0: number): VkFramebufferCreateInfo;
}