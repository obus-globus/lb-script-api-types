import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkFramebufferAttachmentsCreateInfo extends Struct<VkFramebufferAttachmentsCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static ATTACHMENTIMAGEINFOCOUNT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PATTACHMENTIMAGEINFOS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkFramebufferAttachmentsCreateInfo;
    static calloc(paramarg0: MemoryStack): VkFramebufferAttachmentsCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkFramebufferAttachmentsCreateInfo;
    static create(paramarg0: number): VkFramebufferAttachmentsCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkFramebufferAttachmentsCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkFramebufferAttachmentsCreateInfo;
    static malloc(paramarg0: MemoryStack): VkFramebufferAttachmentsCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nattachmentImageInfoCount(paramarg0: number): number;
    static nattachmentImageInfoCount(paramarg0: number, paramarg1: number): void;
    static npAttachmentImageInfos(paramarg0: number): (Object | null)[];
    static npAttachmentImageInfos(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    attachmentImageInfoCount(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkFramebufferAttachmentsCreateInfo;
    pAttachmentImageInfos(): (Object | null)[];
    pAttachmentImageInfos(arg0: (Object | null)[]): VkFramebufferAttachmentsCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkFramebufferAttachmentsCreateInfo;
    sType(): number;
    sType(arg0: number): VkFramebufferAttachmentsCreateInfo;
    sType$Default(): VkFramebufferAttachmentsCreateInfo;
    set(arg0: number, arg1: number, arg2: (Object | null)[]): VkFramebufferAttachmentsCreateInfo;
    set(arg0: VkFramebufferAttachmentsCreateInfo): VkFramebufferAttachmentsCreateInfo;
    sizeof(): number;
}