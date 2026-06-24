import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAttachmentReference2 } from '../../../org/lwjgl/vulkan/VkAttachmentReference2.d.ts'
import type { VkFragmentShadingRateAttachmentInfoKHR } from '../../../org/lwjgl/vulkan/VkFragmentShadingRateAttachmentInfoKHR.d.ts'
import type { VkMultisampledRenderToSingleSampledInfoEXT } from '../../../org/lwjgl/vulkan/VkMultisampledRenderToSingleSampledInfoEXT.d.ts'
import type { VkRenderPassCreationControlEXT } from '../../../org/lwjgl/vulkan/VkRenderPassCreationControlEXT.d.ts'
import type { VkRenderPassSubpassFeedbackCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkRenderPassSubpassFeedbackCreateInfoEXT.d.ts'
import type { VkSubpassDescriptionDepthStencilResolve } from '../../../org/lwjgl/vulkan/VkSubpassDescriptionDepthStencilResolve.d.ts'
import type { VkSubpassDescriptionDepthStencilResolveKHR } from '../../../org/lwjgl/vulkan/VkSubpassDescriptionDepthStencilResolveKHR.d.ts'
export class VkSubpassDescription2 extends Struct<VkSubpassDescription2> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLORATTACHMENTCOUNT: number;
    static FLAGS: number;
    static INPUTATTACHMENTCOUNT: number;
    static PCOLORATTACHMENTS: number;
    static PDEPTHSTENCILATTACHMENT: number;
    static PINPUTATTACHMENTS: number;
    static PIPELINEBINDPOINT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPRESERVEATTACHMENTS: number;
    static PRESERVEATTACHMENTCOUNT: number;
    static PRESOLVEATTACHMENTS: number;
    static SIZEOF: number;
    static STYPE: number;
    static VIEWMASK: number;
    static calloc(): VkSubpassDescription2;
    static calloc(paramarg0: MemoryStack): VkSubpassDescription2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSubpassDescription2;
    static create(paramarg0: number): VkSubpassDescription2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSubpassDescription2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSubpassDescription2;
    static malloc(paramarg0: MemoryStack): VkSubpassDescription2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncolorAttachmentCount(paramarg0: number): number;
    static ncolorAttachmentCount(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static ninputAttachmentCount(paramarg0: number): number;
    static ninputAttachmentCount(paramarg0: number, paramarg1: number): void;
    static npColorAttachments(paramarg0: number): (Object | null)[];
    static npColorAttachments(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npDepthStencilAttachment(paramarg0: number): VkAttachmentReference2;
    static npDepthStencilAttachment(paramarg0: number, paramarg1: VkAttachmentReference2): void;
    static npInputAttachments(paramarg0: number): (Object | null)[];
    static npInputAttachments(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPreserveAttachments(paramarg0: number): IntBuffer;
    static npPreserveAttachments(paramarg0: number, paramarg1: IntBuffer): void;
    static npResolveAttachments(paramarg0: number): (Object | null)[];
    static npResolveAttachments(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npipelineBindPoint(paramarg0: number): number;
    static npipelineBindPoint(paramarg0: number, paramarg1: number): void;
    static npreserveAttachmentCount(paramarg0: number): number;
    static npreserveAttachmentCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nviewMask(paramarg0: number): number;
    static nviewMask(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    colorAttachmentCount(): number;
    colorAttachmentCount(arg0: number): VkSubpassDescription2;
    create(arg0: number, arg1: ByteBuffer): VkSubpassDescription2;
    flags(): number;
    flags(arg0: number): VkSubpassDescription2;
    inputAttachmentCount(): number;
    pColorAttachments(): (Object | null)[];
    pColorAttachments(arg0: (Object | null)[]): VkSubpassDescription2;
    pDepthStencilAttachment(): VkAttachmentReference2;
    pDepthStencilAttachment(arg0: VkAttachmentReference2): VkSubpassDescription2;
    pInputAttachments(): (Object | null)[];
    pInputAttachments(arg0: (Object | null)[]): VkSubpassDescription2;
    pNext(): number;
    pNext(arg0: number): VkSubpassDescription2;
    pNext(arg0: VkFragmentShadingRateAttachmentInfoKHR): VkSubpassDescription2;
    pNext(arg0: VkMultisampledRenderToSingleSampledInfoEXT): VkSubpassDescription2;
    pNext(arg0: VkRenderPassCreationControlEXT): VkSubpassDescription2;
    pNext(arg0: VkRenderPassSubpassFeedbackCreateInfoEXT): VkSubpassDescription2;
    pNext(arg0: VkSubpassDescriptionDepthStencilResolve): VkSubpassDescription2;
    pNext(arg0: VkSubpassDescriptionDepthStencilResolveKHR): VkSubpassDescription2;
    pPreserveAttachments(): IntBuffer;
    pPreserveAttachments(arg0: IntBuffer): VkSubpassDescription2;
    pResolveAttachments(): (Object | null)[];
    pResolveAttachments(arg0: (Object | null)[]): VkSubpassDescription2;
    pipelineBindPoint(): number;
    pipelineBindPoint(arg0: number): VkSubpassDescription2;
    preserveAttachmentCount(): number;
    sType(): number;
    sType(arg0: number): VkSubpassDescription2;
    sType$Default(): VkSubpassDescription2;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: (Object | null)[], arg6: number, arg7: (Object | null)[], arg8: (Object | null)[], arg9: VkAttachmentReference2, arg10: IntBuffer): VkSubpassDescription2;
    set(arg0: VkSubpassDescription2): VkSubpassDescription2;
    sizeof(): number;
    viewMask(): number;
    viewMask(arg0: number): VkSubpassDescription2;
}