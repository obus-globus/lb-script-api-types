import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkStencilOpState extends Struct<VkStencilOpState> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPAREMASK: number;
    static COMPAREOP: number;
    static DEPTHFAILOP: number;
    static FAILOP: number;
    static PASSOP: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REFERENCE: number;
    static SIZEOF: number;
    static WRITEMASK: number;
    static calloc(): VkStencilOpState;
    static calloc(paramarg0: MemoryStack): VkStencilOpState;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkStencilOpState;
    static create(paramarg0: number): VkStencilOpState;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkStencilOpState;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkStencilOpState;
    static malloc(paramarg0: MemoryStack): VkStencilOpState;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncompareMask(paramarg0: number): number;
    static ncompareMask(paramarg0: number, paramarg1: number): void;
    static ncompareOp(paramarg0: number): number;
    static ncompareOp(paramarg0: number, paramarg1: number): void;
    static ndepthFailOp(paramarg0: number): number;
    static ndepthFailOp(paramarg0: number, paramarg1: number): void;
    static nfailOp(paramarg0: number): number;
    static nfailOp(paramarg0: number, paramarg1: number): void;
    static npassOp(paramarg0: number): number;
    static npassOp(paramarg0: number, paramarg1: number): void;
    static nreference(paramarg0: number): number;
    static nreference(paramarg0: number, paramarg1: number): void;
    static nwriteMask(paramarg0: number): number;
    static nwriteMask(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    compareMask(): number;
    compareMask(arg0: number): VkStencilOpState;
    compareOp(): number;
    compareOp(arg0: number): VkStencilOpState;
    create(arg0: number, arg1: ByteBuffer): VkStencilOpState;
    depthFailOp(): number;
    depthFailOp(arg0: number): VkStencilOpState;
    failOp(): number;
    failOp(arg0: number): VkStencilOpState;
    passOp(): number;
    passOp(arg0: number): VkStencilOpState;
    reference(): number;
    reference(arg0: number): VkStencilOpState;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): VkStencilOpState;
    set(arg0: VkStencilOpState): VkStencilOpState;
    sizeof(): number;
    writeMask(): number;
    writeMask(arg0: number): VkStencilOpState;
}