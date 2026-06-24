import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkFramebufferAttachmentImageInfo extends Struct<VkFramebufferAttachmentImageInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static HEIGHT: number;
    static LAYERCOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PVIEWFORMATS: number;
    static SIZEOF: number;
    static STYPE: number;
    static USAGE: number;
    static VIEWFORMATCOUNT: number;
    static WIDTH: number;
    static calloc(): VkFramebufferAttachmentImageInfo;
    static calloc(paramarg0: MemoryStack): VkFramebufferAttachmentImageInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkFramebufferAttachmentImageInfo;
    static create(paramarg0: number): VkFramebufferAttachmentImageInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkFramebufferAttachmentImageInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkFramebufferAttachmentImageInfo;
    static malloc(paramarg0: MemoryStack): VkFramebufferAttachmentImageInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nheight(paramarg0: number): number;
    static nheight(paramarg0: number, paramarg1: number): void;
    static nlayerCount(paramarg0: number): number;
    static nlayerCount(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npViewFormats(paramarg0: number): IntBuffer;
    static npViewFormats(paramarg0: number, paramarg1: IntBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nusage(paramarg0: number): number;
    static nusage(paramarg0: number, paramarg1: number): void;
    static nviewFormatCount(paramarg0: number): number;
    static nviewFormatCount(paramarg0: number, paramarg1: number): void;
    static nwidth(paramarg0: number): number;
    static nwidth(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkFramebufferAttachmentImageInfo;
    flags(): number;
    flags(arg0: number): VkFramebufferAttachmentImageInfo;
    height(): number;
    height(arg0: number): VkFramebufferAttachmentImageInfo;
    layerCount(): number;
    layerCount(arg0: number): VkFramebufferAttachmentImageInfo;
    pNext(): number;
    pNext(arg0: number): VkFramebufferAttachmentImageInfo;
    pViewFormats(): IntBuffer;
    pViewFormats(arg0: IntBuffer): VkFramebufferAttachmentImageInfo;
    sType(): number;
    sType(arg0: number): VkFramebufferAttachmentImageInfo;
    sType$Default(): VkFramebufferAttachmentImageInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: IntBuffer): VkFramebufferAttachmentImageInfo;
    set(arg0: VkFramebufferAttachmentImageInfo): VkFramebufferAttachmentImageInfo;
    sizeof(): number;
    usage(): number;
    usage(arg0: number): VkFramebufferAttachmentImageInfo;
    viewFormatCount(): number;
    width(): number;
    width(arg0: number): VkFramebufferAttachmentImageInfo;
}