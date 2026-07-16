import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkColorBlendAdvancedEXT extends Struct<VkColorBlendAdvancedEXT> implements NativeResource {
    static ADVANCEDBLENDOP: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BLENDOVERLAP: number;
    static CLAMPRESULTS: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTPREMULTIPLIED: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCPREMULTIPLIED: number;
    static calloc(): VkColorBlendAdvancedEXT;
    static calloc(paramarg0: MemoryStack): VkColorBlendAdvancedEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkColorBlendAdvancedEXT;
    static create(paramarg0: number): VkColorBlendAdvancedEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkColorBlendAdvancedEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkColorBlendAdvancedEXT;
    static malloc(paramarg0: MemoryStack): VkColorBlendAdvancedEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nadvancedBlendOp(paramarg0: number): number;
    static nadvancedBlendOp(paramarg0: number, paramarg1: number): void;
    static nblendOverlap(paramarg0: number): number;
    static nblendOverlap(paramarg0: number, paramarg1: number): void;
    static nclampResults(paramarg0: number): number;
    static nclampResults(paramarg0: number, paramarg1: number): void;
    static ndstPremultiplied(paramarg0: number): number;
    static ndstPremultiplied(paramarg0: number, paramarg1: number): void;
    static nsrcPremultiplied(paramarg0: number): number;
    static nsrcPremultiplied(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    advancedBlendOp(): number;
    advancedBlendOp(arg0: number): VkColorBlendAdvancedEXT;
    blendOverlap(): number;
    blendOverlap(arg0: number): VkColorBlendAdvancedEXT;
    clampResults(): boolean;
    clampResults(arg0: boolean): VkColorBlendAdvancedEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkColorBlendAdvancedEXT;
    dstPremultiplied(): boolean;
    dstPremultiplied(arg0: boolean): VkColorBlendAdvancedEXT;
    set(arg0: number, arg1: boolean, arg2: boolean, arg3: number, arg4: boolean): VkColorBlendAdvancedEXT;
    set(arg0: VkColorBlendAdvancedEXT): VkColorBlendAdvancedEXT;
    sizeof(): number;
    srcPremultiplied(): boolean;
    srcPremultiplied(arg0: boolean): VkColorBlendAdvancedEXT;
}