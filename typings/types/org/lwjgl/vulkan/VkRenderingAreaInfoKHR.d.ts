import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkRenderingAreaInfo } from '../../../org/lwjgl/vulkan/VkRenderingAreaInfo.d.ts'
export class VkRenderingAreaInfoKHR extends VkRenderingAreaInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLORATTACHMENTCOUNT: number;
    static DEPTHATTACHMENTFORMAT: number;
    static PCOLORATTACHMENTFORMATS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STENCILATTACHMENTFORMAT: number;
    static STYPE: number;
    static VIEWMASK: number;
    static calloc(): VkRenderingAreaInfo;
    static calloc(paramarg0: MemoryStack): VkRenderingAreaInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkRenderingAreaInfoKHR;
    static calloc(paramarg0: MemoryStack): VkRenderingAreaInfoKHR;
    static create(): VkRenderingAreaInfo;
    static create(paramarg0: number): VkRenderingAreaInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkRenderingAreaInfoKHR;
    static create(paramarg0: number): VkRenderingAreaInfoKHR;
    static createSafe(paramarg0: number): VkRenderingAreaInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderingAreaInfoKHR;
    static malloc(): VkRenderingAreaInfo;
    static malloc(paramarg0: MemoryStack): VkRenderingAreaInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkRenderingAreaInfoKHR;
    static malloc(paramarg0: MemoryStack): VkRenderingAreaInfoKHR;
    static ncolorAttachmentCount(paramarg0: number): number;
    static ncolorAttachmentCount(paramarg0: number, paramarg1: number): void;
    static ndepthAttachmentFormat(paramarg0: number): number;
    static ndepthAttachmentFormat(paramarg0: number, paramarg1: number): void;
    static npColorAttachmentFormats(paramarg0: number): IntBuffer;
    static npColorAttachmentFormats(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstencilAttachmentFormat(paramarg0: number): number;
    static nstencilAttachmentFormat(paramarg0: number, paramarg1: number): void;
    static nviewMask(paramarg0: number): number;
    static nviewMask(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    colorAttachmentCount(): number;
    colorAttachmentCount(arg0: number): VkRenderingAreaInfoKHR;
    create(arg0: number, arg1: ByteBuffer): VkRenderingAreaInfoKHR;
    depthAttachmentFormat(): number;
    depthAttachmentFormat(arg0: number): VkRenderingAreaInfoKHR;
    pColorAttachmentFormats(): IntBuffer;
    pColorAttachmentFormats(arg0: IntBuffer): VkRenderingAreaInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkRenderingAreaInfoKHR;
    sType(): number;
    sType(arg0: number): VkRenderingAreaInfoKHR;
    sType$Default(): VkRenderingAreaInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: IntBuffer, arg5: number, arg6: number): VkRenderingAreaInfoKHR;
    set(arg0: VkRenderingAreaInfo): VkRenderingAreaInfo;
    set(arg0: VkRenderingAreaInfoKHR): VkRenderingAreaInfoKHR;
    stencilAttachmentFormat(): number;
    stencilAttachmentFormat(arg0: number): VkRenderingAreaInfoKHR;
    viewMask(): number;
    viewMask(arg0: number): VkRenderingAreaInfoKHR;
}