import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VmaCheckDefragmentationBreakFunction } from '../../../../org/lwjgl/util/vma/VmaCheckDefragmentationBreakFunction.d.ts'
import type { VmaCheckDefragmentationBreakFunctionI } from '../../../../org/lwjgl/util/vma/VmaCheckDefragmentationBreakFunctionI.d.ts'
export class VmaDefragmentationInfo extends Struct<VmaDefragmentationInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static MAXALLOCATIONSPERPASS: number;
    static MAXBYTESPERPASS: number;
    static PBREAKCALLBACKUSERDATA: number;
    static PFNBREAKCALLBACK: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static POOL: number;
    static SIZEOF: number;
    static calloc(): VmaDefragmentationInfo;
    static calloc(paramarg0: MemoryStack): VmaDefragmentationInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VmaDefragmentationInfo;
    static create(paramarg0: number): VmaDefragmentationInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VmaDefragmentationInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VmaDefragmentationInfo;
    static malloc(paramarg0: MemoryStack): VmaDefragmentationInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nmaxAllocationsPerPass(paramarg0: number): number;
    static nmaxAllocationsPerPass(paramarg0: number, paramarg1: number): void;
    static nmaxBytesPerPass(paramarg0: number): number;
    static nmaxBytesPerPass(paramarg0: number, paramarg1: number): void;
    static npBreakCallbackUserData(paramarg0: number): number;
    static npBreakCallbackUserData(paramarg0: number, paramarg1: number): void;
    static npfnBreakCallback(paramarg0: number): VmaCheckDefragmentationBreakFunction;
    static npfnBreakCallback(paramarg0: number, paramarg1: (param0: number) => number): void;
    static npool(paramarg0: number): number;
    static npool(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VmaDefragmentationInfo;
    flags(): number;
    flags(arg0: number): VmaDefragmentationInfo;
    maxAllocationsPerPass(): number;
    maxAllocationsPerPass(arg0: number): VmaDefragmentationInfo;
    maxBytesPerPass(): number;
    maxBytesPerPass(arg0: number): VmaDefragmentationInfo;
    pBreakCallbackUserData(): number;
    pBreakCallbackUserData(arg0: number): VmaDefragmentationInfo;
    pfnBreakCallback(): VmaCheckDefragmentationBreakFunction;
    pfnBreakCallback(arg0: (param0: number) => number): VmaDefragmentationInfo;
    pool(): number;
    pool(arg0: number): VmaDefragmentationInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: (param0: number) => number, arg5: number): VmaDefragmentationInfo;
    set(arg0: VmaDefragmentationInfo): VmaDefragmentationInfo;
    sizeof(): number;
}