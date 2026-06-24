import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VmaDetailedStatistics } from '../../../../org/lwjgl/util/vma/VmaDetailedStatistics.d.ts'
export class VmaTotalStatistics extends Struct<VmaTotalStatistics> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MEMORYHEAP: number;
    static MEMORYTYPE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TOTAL: number;
    static calloc(): VmaTotalStatistics;
    static calloc(paramarg0: MemoryStack): VmaTotalStatistics;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VmaTotalStatistics;
    static create(paramarg0: number): VmaTotalStatistics;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VmaTotalStatistics;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VmaTotalStatistics;
    static malloc(paramarg0: MemoryStack): VmaTotalStatistics;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmemoryHeap(paramarg0: number, paramarg1: number): VmaDetailedStatistics;
    static nmemoryHeap(paramarg0: number): (Object | null)[];
    static nmemoryType(paramarg0: number, paramarg1: number): VmaDetailedStatistics;
    static nmemoryType(paramarg0: number): (Object | null)[];
    static ntotal(paramarg0: number): VmaDetailedStatistics;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VmaTotalStatistics;
    memoryHeap(): (Object | null)[];
    memoryHeap(arg0: number): VmaDetailedStatistics;
    memoryType(): (Object | null)[];
    memoryType(arg0: number): VmaDetailedStatistics;
    sizeof(): number;
    total(): VmaDetailedStatistics;
}