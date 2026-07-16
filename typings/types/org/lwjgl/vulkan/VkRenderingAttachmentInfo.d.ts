import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAttachmentFeedbackLoopInfoEXT } from '../../../org/lwjgl/vulkan/VkAttachmentFeedbackLoopInfoEXT.d.ts'
import type { VkClearValue } from '../../../org/lwjgl/vulkan/VkClearValue.d.ts'
import type { VkRenderingAttachmentFlagsInfoKHR } from '../../../org/lwjgl/vulkan/VkRenderingAttachmentFlagsInfoKHR.d.ts'
export class VkRenderingAttachmentInfo extends Struct<VkRenderingAttachmentInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLEARVALUE: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGELAYOUT: number;
    static IMAGEVIEW: number;
    static LOADOP: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESOLVEIMAGELAYOUT: number;
    static RESOLVEIMAGEVIEW: number;
    static RESOLVEMODE: number;
    static SIZEOF: number;
    static STOREOP: number;
    static STYPE: number;
    static calloc(): VkRenderingAttachmentInfo;
    static calloc(paramarg0: MemoryStack): VkRenderingAttachmentInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRenderingAttachmentInfo;
    static create(paramarg0: number): VkRenderingAttachmentInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderingAttachmentInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRenderingAttachmentInfo;
    static malloc(paramarg0: MemoryStack): VkRenderingAttachmentInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nclearValue(paramarg0: number): VkClearValue;
    static nclearValue(paramarg0: number, paramarg1: VkClearValue): void;
    static nimageLayout(paramarg0: number): number;
    static nimageLayout(paramarg0: number, paramarg1: number): void;
    static nimageView(paramarg0: number): number;
    static nimageView(paramarg0: number, paramarg1: number): void;
    static nloadOp(paramarg0: number): number;
    static nloadOp(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nresolveImageLayout(paramarg0: number): number;
    static nresolveImageLayout(paramarg0: number, paramarg1: number): void;
    static nresolveImageView(paramarg0: number): number;
    static nresolveImageView(paramarg0: number, paramarg1: number): void;
    static nresolveMode(paramarg0: number): number;
    static nresolveMode(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstoreOp(paramarg0: number): number;
    static nstoreOp(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    clearValue(): VkClearValue;
    clearValue(arg0: (param0: VkClearValue) => void): VkRenderingAttachmentInfo;
    clearValue(arg0: VkClearValue): VkRenderingAttachmentInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkRenderingAttachmentInfo;
    imageLayout(): number;
    imageLayout(arg0: number): VkRenderingAttachmentInfo;
    imageView(): number;
    imageView(arg0: number): VkRenderingAttachmentInfo;
    loadOp(): number;
    loadOp(arg0: number): VkRenderingAttachmentInfo;
    pNext(): number;
    pNext(arg0: number): VkRenderingAttachmentInfo;
    pNext(arg0: VkAttachmentFeedbackLoopInfoEXT): VkRenderingAttachmentInfo;
    pNext(arg0: VkRenderingAttachmentFlagsInfoKHR): VkRenderingAttachmentInfo;
    resolveImageLayout(): number;
    resolveImageLayout(arg0: number): VkRenderingAttachmentInfo;
    resolveImageView(): number;
    resolveImageView(arg0: number): VkRenderingAttachmentInfo;
    resolveMode(): number;
    resolveMode(arg0: number): VkRenderingAttachmentInfo;
    sType(): number;
    sType(arg0: number): VkRenderingAttachmentInfo;
    sType$Default(): VkRenderingAttachmentInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: VkClearValue): VkRenderingAttachmentInfo;
    set(arg0: VkRenderingAttachmentInfo): VkRenderingAttachmentInfo;
    sizeof(): number;
    storeOp(): number;
    storeOp(arg0: number): VkRenderingAttachmentInfo;
}