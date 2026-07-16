import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkAttachmentDescription extends Struct<VkAttachmentDescription> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FINALLAYOUT: number;
    static FLAGS: number;
    static FORMAT: number;
    static INITIALLAYOUT: number;
    static LOADOP: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SAMPLES: number;
    static SIZEOF: number;
    static STENCILLOADOP: number;
    static STENCILSTOREOP: number;
    static STOREOP: number;
    static calloc(): VkAttachmentDescription;
    static calloc(paramarg0: MemoryStack): VkAttachmentDescription;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAttachmentDescription;
    static create(paramarg0: number): VkAttachmentDescription;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAttachmentDescription;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAttachmentDescription;
    static malloc(paramarg0: MemoryStack): VkAttachmentDescription;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfinalLayout(paramarg0: number): number;
    static nfinalLayout(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static ninitialLayout(paramarg0: number): number;
    static ninitialLayout(paramarg0: number, paramarg1: number): void;
    static nloadOp(paramarg0: number): number;
    static nloadOp(paramarg0: number, paramarg1: number): void;
    static nsamples(paramarg0: number): number;
    static nsamples(paramarg0: number, paramarg1: number): void;
    static nstencilLoadOp(paramarg0: number): number;
    static nstencilLoadOp(paramarg0: number, paramarg1: number): void;
    static nstencilStoreOp(paramarg0: number): number;
    static nstencilStoreOp(paramarg0: number, paramarg1: number): void;
    static nstoreOp(paramarg0: number): number;
    static nstoreOp(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAttachmentDescription;
    finalLayout(): number;
    finalLayout(arg0: number): VkAttachmentDescription;
    flags(): number;
    flags(arg0: number): VkAttachmentDescription;
    format(): number;
    format(arg0: number): VkAttachmentDescription;
    initialLayout(): number;
    initialLayout(arg0: number): VkAttachmentDescription;
    loadOp(): number;
    loadOp(arg0: number): VkAttachmentDescription;
    samples(): number;
    samples(arg0: number): VkAttachmentDescription;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): VkAttachmentDescription;
    set(arg0: VkAttachmentDescription): VkAttachmentDescription;
    sizeof(): number;
    stencilLoadOp(): number;
    stencilLoadOp(arg0: number): VkAttachmentDescription;
    stencilStoreOp(): number;
    stencilStoreOp(arg0: number): VkAttachmentDescription;
    storeOp(): number;
    storeOp(arg0: number): VkAttachmentDescription;
}