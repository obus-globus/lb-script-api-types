import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAttachmentReference2 } from '../../../org/lwjgl/vulkan/VkAttachmentReference2.d.ts'
export class VkSubpassDescriptionDepthStencilResolve extends Struct<VkSubpassDescriptionDepthStencilResolve> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEPTHRESOLVEMODE: number;
    static PDEPTHSTENCILRESOLVEATTACHMENT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STENCILRESOLVEMODE: number;
    static STYPE: number;
    static calloc(): VkSubpassDescriptionDepthStencilResolve;
    static calloc(paramarg0: MemoryStack): VkSubpassDescriptionDepthStencilResolve;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSubpassDescriptionDepthStencilResolve;
    static create(paramarg0: number): VkSubpassDescriptionDepthStencilResolve;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSubpassDescriptionDepthStencilResolve;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSubpassDescriptionDepthStencilResolve;
    static malloc(paramarg0: MemoryStack): VkSubpassDescriptionDepthStencilResolve;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndepthResolveMode(paramarg0: number): number;
    static ndepthResolveMode(paramarg0: number, paramarg1: number): void;
    static npDepthStencilResolveAttachment(paramarg0: number): VkAttachmentReference2;
    static npDepthStencilResolveAttachment(paramarg0: number, paramarg1: VkAttachmentReference2): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstencilResolveMode(paramarg0: number): number;
    static nstencilResolveMode(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSubpassDescriptionDepthStencilResolve;
    depthResolveMode(): number;
    depthResolveMode(arg0: number): VkSubpassDescriptionDepthStencilResolve;
    pDepthStencilResolveAttachment(): VkAttachmentReference2;
    pDepthStencilResolveAttachment(arg0: VkAttachmentReference2): VkSubpassDescriptionDepthStencilResolve;
    pNext(): number;
    pNext(arg0: number): VkSubpassDescriptionDepthStencilResolve;
    sType(): number;
    sType(arg0: number): VkSubpassDescriptionDepthStencilResolve;
    sType$Default(): VkSubpassDescriptionDepthStencilResolve;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: VkAttachmentReference2): VkSubpassDescriptionDepthStencilResolve;
    set(arg0: VkSubpassDescriptionDepthStencilResolve): VkSubpassDescriptionDepthStencilResolve;
    sizeof(): number;
    stencilResolveMode(): number;
    stencilResolveMode(arg0: number): VkSubpassDescriptionDepthStencilResolve;
}