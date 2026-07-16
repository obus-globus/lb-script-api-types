import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VmaStatistics } from '../../../../org/lwjgl/util/vma/VmaStatistics.d.ts'
export class VmaBudget extends Struct<VmaBudget> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUDGET: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STATISTICS: number;
    static USAGE: number;
    static calloc(): VmaBudget;
    static calloc(paramarg0: MemoryStack): VmaBudget;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VmaBudget;
    static create(paramarg0: number): VmaBudget;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VmaBudget;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VmaBudget;
    static malloc(paramarg0: MemoryStack): VmaBudget;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbudget(paramarg0: number): number;
    static nstatistics(paramarg0: number): VmaStatistics;
    static nusage(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    budget(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VmaBudget;
    sizeof(): number;
    statistics(): VmaStatistics;
    usage(): number;
}