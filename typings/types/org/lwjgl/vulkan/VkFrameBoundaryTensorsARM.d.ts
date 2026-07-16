import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkFrameBoundaryTensorsARM extends Struct<VkFrameBoundaryTensorsARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PTENSORS: number;
    static SIZEOF: number;
    static STYPE: number;
    static TENSORCOUNT: number;
    static calloc(): VkFrameBoundaryTensorsARM;
    static calloc(paramarg0: MemoryStack): VkFrameBoundaryTensorsARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkFrameBoundaryTensorsARM;
    static create(paramarg0: number): VkFrameBoundaryTensorsARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkFrameBoundaryTensorsARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkFrameBoundaryTensorsARM;
    static malloc(paramarg0: MemoryStack): VkFrameBoundaryTensorsARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npTensors(paramarg0: number): LongBuffer;
    static npTensors(paramarg0: number, paramarg1: LongBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntensorCount(paramarg0: number): number;
    static ntensorCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkFrameBoundaryTensorsARM;
    pNext(): number;
    pNext(arg0: number): VkFrameBoundaryTensorsARM;
    pTensors(): LongBuffer;
    pTensors(arg0: LongBuffer): VkFrameBoundaryTensorsARM;
    sType(): number;
    sType(arg0: number): VkFrameBoundaryTensorsARM;
    sType$Default(): VkFrameBoundaryTensorsARM;
    set(arg0: number, arg1: number, arg2: LongBuffer): VkFrameBoundaryTensorsARM;
    set(arg0: VkFrameBoundaryTensorsARM): VkFrameBoundaryTensorsARM;
    sizeof(): number;
    tensorCount(): number;
}