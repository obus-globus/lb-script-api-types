import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VmaStatistics } from '../../../../org/lwjgl/util/vma/VmaStatistics.d.ts'
export class VmaDetailedStatistics extends Struct<VmaDetailedStatistics> implements NativeResource {
    static ALIGNOF: number;
    static ALLOCATIONSIZEMAX: number;
    static ALLOCATIONSIZEMIN: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STATISTICS: number;
    static UNUSEDRANGECOUNT: number;
    static UNUSEDRANGESIZEMAX: number;
    static UNUSEDRANGESIZEMIN: number;
    static calloc(): VmaDetailedStatistics;
    static calloc(paramarg0: MemoryStack): VmaDetailedStatistics;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VmaDetailedStatistics;
    static create(paramarg0: number): VmaDetailedStatistics;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VmaDetailedStatistics;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VmaDetailedStatistics;
    static malloc(paramarg0: MemoryStack): VmaDetailedStatistics;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nallocationSizeMax(paramarg0: number): number;
    static nallocationSizeMin(paramarg0: number): number;
    static nstatistics(paramarg0: number): VmaStatistics;
    static nunusedRangeCount(paramarg0: number): number;
    static nunusedRangeSizeMax(paramarg0: number): number;
    static nunusedRangeSizeMin(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    allocationSizeMax(): number;
    allocationSizeMin(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VmaDetailedStatistics;
    sizeof(): number;
    statistics(): VmaStatistics;
    unusedRangeCount(): number;
    unusedRangeSizeMax(): number;
    unusedRangeSizeMin(): number;
}