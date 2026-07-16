import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAttachmentReference } from '../../../org/lwjgl/vulkan/VkAttachmentReference.d.ts'
export class VkSubpassDescription extends Struct<VkSubpassDescription> implements NativeResource {
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
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPRESERVEATTACHMENTS: number;
    static PRESERVEATTACHMENTCOUNT: number;
    static PRESOLVEATTACHMENTS: number;
    static SIZEOF: number;
    static calloc(): VkSubpassDescription;
    static calloc(paramarg0: MemoryStack): VkSubpassDescription;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSubpassDescription;
    static create(paramarg0: number): VkSubpassDescription;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSubpassDescription;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSubpassDescription;
    static malloc(paramarg0: MemoryStack): VkSubpassDescription;
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
    static npDepthStencilAttachment(paramarg0: number): VkAttachmentReference;
    static npDepthStencilAttachment(paramarg0: number, paramarg1: VkAttachmentReference): void;
    static npInputAttachments(paramarg0: number): (Object | null)[];
    static npInputAttachments(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npPreserveAttachments(paramarg0: number): IntBuffer;
    static npPreserveAttachments(paramarg0: number, paramarg1: IntBuffer): void;
    static npResolveAttachments(paramarg0: number): (Object | null)[];
    static npResolveAttachments(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npipelineBindPoint(paramarg0: number): number;
    static npipelineBindPoint(paramarg0: number, paramarg1: number): void;
    static npreserveAttachmentCount(paramarg0: number): number;
    static npreserveAttachmentCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    colorAttachmentCount(): number;
    colorAttachmentCount(arg0: number): VkSubpassDescription;
    create(arg0: number, arg1: ByteBuffer): VkSubpassDescription;
    flags(): number;
    flags(arg0: number): VkSubpassDescription;
    inputAttachmentCount(): number;
    pColorAttachments(): (Object | null)[];
    pColorAttachments(arg0: (Object | null)[]): VkSubpassDescription;
    pDepthStencilAttachment(): VkAttachmentReference;
    pDepthStencilAttachment(arg0: VkAttachmentReference): VkSubpassDescription;
    pInputAttachments(): (Object | null)[];
    pInputAttachments(arg0: (Object | null)[]): VkSubpassDescription;
    pPreserveAttachments(): IntBuffer;
    pPreserveAttachments(arg0: IntBuffer): VkSubpassDescription;
    pResolveAttachments(): (Object | null)[];
    pResolveAttachments(arg0: (Object | null)[]): VkSubpassDescription;
    pipelineBindPoint(): number;
    pipelineBindPoint(arg0: number): VkSubpassDescription;
    preserveAttachmentCount(): number;
    set(arg0: number, arg1: number, arg2: (Object | null)[], arg3: number, arg4: (Object | null)[], arg5: (Object | null)[], arg6: VkAttachmentReference, arg7: IntBuffer): VkSubpassDescription;
    set(arg0: VkSubpassDescription): VkSubpassDescription;
    sizeof(): number;
}