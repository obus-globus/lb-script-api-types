import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineColorBlendAttachmentState extends Struct<VkPipelineColorBlendAttachmentState> implements NativeResource {
    static ALIGNOF: number;
    static ALPHABLENDOP: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BLENDENABLE: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLORBLENDOP: number;
    static COLORWRITEMASK: number;
    static DSTALPHABLENDFACTOR: number;
    static DSTCOLORBLENDFACTOR: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCALPHABLENDFACTOR: number;
    static SRCCOLORBLENDFACTOR: number;
    static calloc(): VkPipelineColorBlendAttachmentState;
    static calloc(paramarg0: MemoryStack): VkPipelineColorBlendAttachmentState;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineColorBlendAttachmentState;
    static create(paramarg0: number): VkPipelineColorBlendAttachmentState;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineColorBlendAttachmentState;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineColorBlendAttachmentState;
    static malloc(paramarg0: MemoryStack): VkPipelineColorBlendAttachmentState;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nalphaBlendOp(paramarg0: number): number;
    static nalphaBlendOp(paramarg0: number, paramarg1: number): void;
    static nblendEnable(paramarg0: number): number;
    static nblendEnable(paramarg0: number, paramarg1: number): void;
    static ncolorBlendOp(paramarg0: number): number;
    static ncolorBlendOp(paramarg0: number, paramarg1: number): void;
    static ncolorWriteMask(paramarg0: number): number;
    static ncolorWriteMask(paramarg0: number, paramarg1: number): void;
    static ndstAlphaBlendFactor(paramarg0: number): number;
    static ndstAlphaBlendFactor(paramarg0: number, paramarg1: number): void;
    static ndstColorBlendFactor(paramarg0: number): number;
    static ndstColorBlendFactor(paramarg0: number, paramarg1: number): void;
    static nsrcAlphaBlendFactor(paramarg0: number): number;
    static nsrcAlphaBlendFactor(paramarg0: number, paramarg1: number): void;
    static nsrcColorBlendFactor(paramarg0: number): number;
    static nsrcColorBlendFactor(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    alphaBlendOp(): number;
    alphaBlendOp(arg0: number): VkPipelineColorBlendAttachmentState;
    blendEnable(): boolean;
    blendEnable(arg0: boolean): VkPipelineColorBlendAttachmentState;
    close(): void;
    colorBlendOp(): number;
    colorBlendOp(arg0: number): VkPipelineColorBlendAttachmentState;
    colorWriteMask(): number;
    colorWriteMask(arg0: number): VkPipelineColorBlendAttachmentState;
    create(arg0: number, arg1: ByteBuffer): VkPipelineColorBlendAttachmentState;
    dstAlphaBlendFactor(): number;
    dstAlphaBlendFactor(arg0: number): VkPipelineColorBlendAttachmentState;
    dstColorBlendFactor(): number;
    dstColorBlendFactor(arg0: number): VkPipelineColorBlendAttachmentState;
    set(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): VkPipelineColorBlendAttachmentState;
    set(arg0: VkPipelineColorBlendAttachmentState): VkPipelineColorBlendAttachmentState;
    sizeof(): number;
    srcAlphaBlendFactor(): number;
    srcAlphaBlendFactor(arg0: number): VkPipelineColorBlendAttachmentState;
    srcColorBlendFactor(): number;
    srcColorBlendFactor(arg0: number): VkPipelineColorBlendAttachmentState;
}