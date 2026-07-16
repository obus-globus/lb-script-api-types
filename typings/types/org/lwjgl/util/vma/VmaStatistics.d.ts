import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VmaStatistics extends Struct<VmaStatistics> implements NativeResource {
    static ALIGNOF: number;
    static ALLOCATIONBYTES: number;
    static ALLOCATIONCOUNT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BLOCKBYTES: number;
    static BLOCKCOUNT: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VmaStatistics;
    static calloc(paramarg0: MemoryStack): VmaStatistics;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VmaStatistics;
    static create(paramarg0: number): VmaStatistics;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VmaStatistics;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VmaStatistics;
    static malloc(paramarg0: MemoryStack): VmaStatistics;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nallocationBytes(paramarg0: number): number;
    static nallocationCount(paramarg0: number): number;
    static nblockBytes(paramarg0: number): number;
    static nblockCount(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    allocationBytes(): number;
    allocationCount(): number;
    blockBytes(): number;
    blockCount(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VmaStatistics;
    sizeof(): number;
}