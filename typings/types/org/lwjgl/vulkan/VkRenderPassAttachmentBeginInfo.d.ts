import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkRenderPassAttachmentBeginInfo extends Struct<VkRenderPassAttachmentBeginInfo> implements NativeResource {
    static ALIGNOF: number;
    static ATTACHMENTCOUNT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PATTACHMENTS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkRenderPassAttachmentBeginInfo;
    static calloc(paramarg0: MemoryStack): VkRenderPassAttachmentBeginInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRenderPassAttachmentBeginInfo;
    static create(paramarg0: number): VkRenderPassAttachmentBeginInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderPassAttachmentBeginInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRenderPassAttachmentBeginInfo;
    static malloc(paramarg0: MemoryStack): VkRenderPassAttachmentBeginInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nattachmentCount(paramarg0: number): number;
    static nattachmentCount(paramarg0: number, paramarg1: number): void;
    static npAttachments(paramarg0: number): LongBuffer;
    static npAttachments(paramarg0: number, paramarg1: LongBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    attachmentCount(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkRenderPassAttachmentBeginInfo;
    pAttachments(): LongBuffer;
    pAttachments(arg0: LongBuffer): VkRenderPassAttachmentBeginInfo;
    pNext(): number;
    pNext(arg0: number): VkRenderPassAttachmentBeginInfo;
    sType(): number;
    sType(arg0: number): VkRenderPassAttachmentBeginInfo;
    sType$Default(): VkRenderPassAttachmentBeginInfo;
    set(arg0: number, arg1: number, arg2: LongBuffer): VkRenderPassAttachmentBeginInfo;
    set(arg0: VkRenderPassAttachmentBeginInfo): VkRenderPassAttachmentBeginInfo;
    sizeof(): number;
}