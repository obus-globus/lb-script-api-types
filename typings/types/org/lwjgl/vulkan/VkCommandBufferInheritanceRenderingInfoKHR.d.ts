import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkCommandBufferInheritanceRenderingInfo } from '../../../org/lwjgl/vulkan/VkCommandBufferInheritanceRenderingInfo.d.ts'
export class VkCommandBufferInheritanceRenderingInfoKHR extends VkCommandBufferInheritanceRenderingInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLORATTACHMENTCOUNT: number;
    static DEPTHATTACHMENTFORMAT: number;
    static FLAGS: number;
    static PCOLORATTACHMENTFORMATS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RASTERIZATIONSAMPLES: number;
    static SIZEOF: number;
    static STENCILATTACHMENTFORMAT: number;
    static STYPE: number;
    static VIEWMASK: number;
    static calloc(): VkCommandBufferInheritanceRenderingInfo;
    static calloc(paramarg0: MemoryStack): VkCommandBufferInheritanceRenderingInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkCommandBufferInheritanceRenderingInfoKHR;
    static calloc(paramarg0: MemoryStack): VkCommandBufferInheritanceRenderingInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCommandBufferInheritanceRenderingInfo;
    static create(paramarg0: number): VkCommandBufferInheritanceRenderingInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkCommandBufferInheritanceRenderingInfoKHR;
    static create(paramarg0: number): VkCommandBufferInheritanceRenderingInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCommandBufferInheritanceRenderingInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCommandBufferInheritanceRenderingInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCommandBufferInheritanceRenderingInfo;
    static malloc(paramarg0: MemoryStack): VkCommandBufferInheritanceRenderingInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkCommandBufferInheritanceRenderingInfoKHR;
    static malloc(paramarg0: MemoryStack): VkCommandBufferInheritanceRenderingInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncolorAttachmentCount(paramarg0: number): number;
    static ncolorAttachmentCount(paramarg0: number, paramarg1: number): void;
    static ndepthAttachmentFormat(paramarg0: number): number;
    static ndepthAttachmentFormat(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npColorAttachmentFormats(paramarg0: number): IntBuffer;
    static npColorAttachmentFormats(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrasterizationSamples(paramarg0: number): number;
    static nrasterizationSamples(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstencilAttachmentFormat(paramarg0: number): number;
    static nstencilAttachmentFormat(paramarg0: number, paramarg1: number): void;
    static nviewMask(paramarg0: number): number;
    static nviewMask(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkCommandBufferInheritanceRenderingInfoKHR;
    depthAttachmentFormat(): number;
    depthAttachmentFormat(arg0: number): VkCommandBufferInheritanceRenderingInfoKHR;
    flags(): number;
    flags(arg0: number): VkCommandBufferInheritanceRenderingInfoKHR;
    pColorAttachmentFormats(): IntBuffer;
    pColorAttachmentFormats(arg0: IntBuffer): VkCommandBufferInheritanceRenderingInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkCommandBufferInheritanceRenderingInfoKHR;
    rasterizationSamples(): number;
    rasterizationSamples(arg0: number): VkCommandBufferInheritanceRenderingInfoKHR;
    sType(): number;
    sType(arg0: number): VkCommandBufferInheritanceRenderingInfoKHR;
    sType$Default(): VkCommandBufferInheritanceRenderingInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: IntBuffer, arg5: number, arg6: number, arg7: number): VkCommandBufferInheritanceRenderingInfoKHR;
    set(arg0: VkCommandBufferInheritanceRenderingInfo): VkCommandBufferInheritanceRenderingInfo;
    set(arg0: VkCommandBufferInheritanceRenderingInfoKHR): VkCommandBufferInheritanceRenderingInfoKHR;
    stencilAttachmentFormat(): number;
    stencilAttachmentFormat(arg0: number): VkCommandBufferInheritanceRenderingInfoKHR;
    viewMask(): number;
    viewMask(arg0: number): VkCommandBufferInheritanceRenderingInfoKHR;
}