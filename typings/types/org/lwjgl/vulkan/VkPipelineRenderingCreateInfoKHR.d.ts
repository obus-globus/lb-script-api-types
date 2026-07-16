import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineRenderingCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineRenderingCreateInfo.d.ts'
export class VkPipelineRenderingCreateInfoKHR extends VkPipelineRenderingCreateInfo {
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
    static calloc(): VkPipelineRenderingCreateInfo;
    static calloc(paramarg0: MemoryStack): VkPipelineRenderingCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPipelineRenderingCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkPipelineRenderingCreateInfoKHR;
    static create(): VkPipelineRenderingCreateInfo;
    static create(paramarg0: number): VkPipelineRenderingCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPipelineRenderingCreateInfoKHR;
    static create(paramarg0: number): VkPipelineRenderingCreateInfoKHR;
    static createSafe(paramarg0: number): VkPipelineRenderingCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineRenderingCreateInfoKHR;
    static malloc(): VkPipelineRenderingCreateInfo;
    static malloc(paramarg0: MemoryStack): VkPipelineRenderingCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPipelineRenderingCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkPipelineRenderingCreateInfoKHR;
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
    colorAttachmentCount(arg0: number): VkPipelineRenderingCreateInfoKHR;
    create(arg0: number, arg1: ByteBuffer): VkPipelineRenderingCreateInfoKHR;
    depthAttachmentFormat(): number;
    depthAttachmentFormat(arg0: number): VkPipelineRenderingCreateInfoKHR;
    pColorAttachmentFormats(): IntBuffer;
    pColorAttachmentFormats(arg0: IntBuffer): VkPipelineRenderingCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkPipelineRenderingCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkPipelineRenderingCreateInfoKHR;
    sType$Default(): VkPipelineRenderingCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: IntBuffer, arg5: number, arg6: number): VkPipelineRenderingCreateInfoKHR;
    set(arg0: VkPipelineRenderingCreateInfo): VkPipelineRenderingCreateInfo;
    set(arg0: VkPipelineRenderingCreateInfoKHR): VkPipelineRenderingCreateInfoKHR;
    stencilAttachmentFormat(): number;
    stencilAttachmentFormat(arg0: number): VkPipelineRenderingCreateInfoKHR;
    viewMask(): number;
    viewMask(arg0: number): VkPipelineRenderingCreateInfoKHR;
}