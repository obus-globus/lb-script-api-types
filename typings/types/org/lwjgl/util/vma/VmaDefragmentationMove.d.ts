import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VmaDefragmentationMove extends Struct<VmaDefragmentationMove> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTTMPALLOCATION: number;
    static OPERATION: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCALLOCATION: number;
    static calloc(): VmaDefragmentationMove;
    static calloc(paramarg0: MemoryStack): VmaDefragmentationMove;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VmaDefragmentationMove;
    static create(paramarg0: number): VmaDefragmentationMove;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VmaDefragmentationMove;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VmaDefragmentationMove;
    static malloc(paramarg0: MemoryStack): VmaDefragmentationMove;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndstTmpAllocation(paramarg0: number): number;
    static ndstTmpAllocation(paramarg0: number, paramarg1: number): void;
    static noperation(paramarg0: number): number;
    static noperation(paramarg0: number, paramarg1: number): void;
    static nsrcAllocation(paramarg0: number): number;
    static nsrcAllocation(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VmaDefragmentationMove;
    dstTmpAllocation(): number;
    dstTmpAllocation(arg0: number): VmaDefragmentationMove;
    operation(): number;
    operation(arg0: number): VmaDefragmentationMove;
    set(arg0: number, arg1: number, arg2: number): VmaDefragmentationMove;
    set(arg0: VmaDefragmentationMove): VmaDefragmentationMove;
    sizeof(): number;
    srcAllocation(): number;
    srcAllocation(arg0: number): VmaDefragmentationMove;
}