import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkColorBlendEquationEXT extends Struct<VkColorBlendEquationEXT> implements NativeResource {
    static ALIGNOF: number;
    static ALPHABLENDOP: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLORBLENDOP: number;
    static DSTALPHABLENDFACTOR: number;
    static DSTCOLORBLENDFACTOR: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCALPHABLENDFACTOR: number;
    static SRCCOLORBLENDFACTOR: number;
    static calloc(): VkColorBlendEquationEXT;
    static calloc(paramarg0: MemoryStack): VkColorBlendEquationEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkColorBlendEquationEXT;
    static create(paramarg0: number): VkColorBlendEquationEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkColorBlendEquationEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkColorBlendEquationEXT;
    static malloc(paramarg0: MemoryStack): VkColorBlendEquationEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nalphaBlendOp(paramarg0: number): number;
    static nalphaBlendOp(paramarg0: number, paramarg1: number): void;
    static ncolorBlendOp(paramarg0: number): number;
    static ncolorBlendOp(paramarg0: number, paramarg1: number): void;
    static ndstAlphaBlendFactor(paramarg0: number): number;
    static ndstAlphaBlendFactor(paramarg0: number, paramarg1: number): void;
    static ndstColorBlendFactor(paramarg0: number): number;
    static ndstColorBlendFactor(paramarg0: number, paramarg1: number): void;
    static nsrcAlphaBlendFactor(paramarg0: number): number;
    static nsrcAlphaBlendFactor(paramarg0: number, paramarg1: number): void;
    static nsrcColorBlendFactor(paramarg0: number): number;
    static nsrcColorBlendFactor(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    alphaBlendOp(): number;
    alphaBlendOp(arg0: number): VkColorBlendEquationEXT;
    close(): void;
    colorBlendOp(): number;
    colorBlendOp(arg0: number): VkColorBlendEquationEXT;
    create(arg0: number, arg1: ByteBuffer): VkColorBlendEquationEXT;
    dstAlphaBlendFactor(): number;
    dstAlphaBlendFactor(arg0: number): VkColorBlendEquationEXT;
    dstColorBlendFactor(): number;
    dstColorBlendFactor(arg0: number): VkColorBlendEquationEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkColorBlendEquationEXT;
    set(arg0: VkColorBlendEquationEXT): VkColorBlendEquationEXT;
    sizeof(): number;
    srcAlphaBlendFactor(): number;
    srcAlphaBlendFactor(arg0: number): VkColorBlendEquationEXT;
    srcColorBlendFactor(): number;
    srcColorBlendFactor(arg0: number): VkColorBlendEquationEXT;
}