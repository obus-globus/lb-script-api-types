import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkQueryPoolPerformanceCreateInfoKHR extends Struct<VkQueryPoolPerformanceCreateInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COUNTERINDEXCOUNT: number;
    static PCOUNTERINDICES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static QUEUEFAMILYINDEX: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkQueryPoolPerformanceCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkQueryPoolPerformanceCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkQueryPoolPerformanceCreateInfoKHR;
    static create(paramarg0: number): VkQueryPoolPerformanceCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkQueryPoolPerformanceCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkQueryPoolPerformanceCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkQueryPoolPerformanceCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncounterIndexCount(paramarg0: number): number;
    static ncounterIndexCount(paramarg0: number, paramarg1: number): void;
    static npCounterIndices(paramarg0: number): IntBuffer;
    static npCounterIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nqueueFamilyIndex(paramarg0: number): number;
    static nqueueFamilyIndex(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    counterIndexCount(): number;
    create(arg0: number, arg1: ByteBuffer): VkQueryPoolPerformanceCreateInfoKHR;
    pCounterIndices(): IntBuffer;
    pCounterIndices(arg0: IntBuffer): VkQueryPoolPerformanceCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkQueryPoolPerformanceCreateInfoKHR;
    queueFamilyIndex(): number;
    queueFamilyIndex(arg0: number): VkQueryPoolPerformanceCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkQueryPoolPerformanceCreateInfoKHR;
    sType$Default(): VkQueryPoolPerformanceCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: IntBuffer): VkQueryPoolPerformanceCreateInfoKHR;
    set(arg0: VkQueryPoolPerformanceCreateInfoKHR): VkQueryPoolPerformanceCreateInfoKHR;
    sizeof(): number;
}