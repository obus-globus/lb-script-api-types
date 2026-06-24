import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkQueryLowLatencySupportNV extends Struct<VkQueryLowLatencySupportNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PQUERIEDLOWLATENCYDATA: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkQueryLowLatencySupportNV;
    static calloc(paramarg0: MemoryStack): VkQueryLowLatencySupportNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkQueryLowLatencySupportNV;
    static create(paramarg0: number): VkQueryLowLatencySupportNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkQueryLowLatencySupportNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkQueryLowLatencySupportNV;
    static malloc(paramarg0: MemoryStack): VkQueryLowLatencySupportNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npQueriedLowLatencyData(paramarg0: number): number;
    static npQueriedLowLatencyData(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkQueryLowLatencySupportNV;
    pNext(): number;
    pNext(arg0: number): VkQueryLowLatencySupportNV;
    pQueriedLowLatencyData(): number;
    pQueriedLowLatencyData(arg0: number): VkQueryLowLatencySupportNV;
    sType(): number;
    sType(arg0: number): VkQueryLowLatencySupportNV;
    sType$Default(): VkQueryLowLatencySupportNV;
    set(arg0: number, arg1: number, arg2: number): VkQueryLowLatencySupportNV;
    set(arg0: VkQueryLowLatencySupportNV): VkQueryLowLatencySupportNV;
    sizeof(): number;
}