import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VmaDefragmentationStats extends Struct<VmaDefragmentationStats> implements NativeResource {
    static ALIGNOF: number;
    static ALLOCATIONSMOVED: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BYTESFREED: number;
    static BYTESMOVED: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICEMEMORYBLOCKSFREED: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VmaDefragmentationStats;
    static calloc(paramarg0: MemoryStack): VmaDefragmentationStats;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VmaDefragmentationStats;
    static create(paramarg0: number): VmaDefragmentationStats;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VmaDefragmentationStats;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VmaDefragmentationStats;
    static malloc(paramarg0: MemoryStack): VmaDefragmentationStats;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nallocationsMoved(paramarg0: number): number;
    static nbytesFreed(paramarg0: number): number;
    static nbytesMoved(paramarg0: number): number;
    static ndeviceMemoryBlocksFreed(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    allocationsMoved(): number;
    bytesFreed(): number;
    bytesMoved(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VmaDefragmentationStats;
    deviceMemoryBlocksFreed(): number;
    sizeof(): number;
}