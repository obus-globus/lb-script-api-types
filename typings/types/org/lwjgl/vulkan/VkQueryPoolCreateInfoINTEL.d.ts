import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkQueryPoolPerformanceQueryCreateInfoINTEL } from '../../../org/lwjgl/vulkan/VkQueryPoolPerformanceQueryCreateInfoINTEL.d.ts'
export class VkQueryPoolCreateInfoINTEL extends VkQueryPoolPerformanceQueryCreateInfoINTEL {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PERFORMANCECOUNTERSSAMPLING: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkQueryPoolCreateInfoINTEL;
    static calloc(paramarg0: MemoryStack): VkQueryPoolCreateInfoINTEL;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkQueryPoolPerformanceQueryCreateInfoINTEL;
    static calloc(paramarg0: MemoryStack): VkQueryPoolPerformanceQueryCreateInfoINTEL;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkQueryPoolCreateInfoINTEL;
    static create(paramarg0: number): VkQueryPoolCreateInfoINTEL;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkQueryPoolPerformanceQueryCreateInfoINTEL;
    static create(paramarg0: number): VkQueryPoolPerformanceQueryCreateInfoINTEL;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkQueryPoolCreateInfoINTEL;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkQueryPoolPerformanceQueryCreateInfoINTEL;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkQueryPoolCreateInfoINTEL;
    static malloc(paramarg0: MemoryStack): VkQueryPoolCreateInfoINTEL;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkQueryPoolPerformanceQueryCreateInfoINTEL;
    static malloc(paramarg0: MemoryStack): VkQueryPoolPerformanceQueryCreateInfoINTEL;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nperformanceCountersSampling(paramarg0: number): number;
    static nperformanceCountersSampling(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkQueryPoolCreateInfoINTEL;
    pNext(): number;
    pNext(arg0: number): VkQueryPoolCreateInfoINTEL;
    performanceCountersSampling(): number;
    performanceCountersSampling(arg0: number): VkQueryPoolCreateInfoINTEL;
    sType(): number;
    sType(arg0: number): VkQueryPoolCreateInfoINTEL;
    sType$Default(): VkQueryPoolCreateInfoINTEL;
    set(arg0: number, arg1: number, arg2: number): VkQueryPoolCreateInfoINTEL;
    set(arg0: VkQueryPoolCreateInfoINTEL): VkQueryPoolCreateInfoINTEL;
    set(arg0: VkQueryPoolPerformanceQueryCreateInfoINTEL): VkQueryPoolPerformanceQueryCreateInfoINTEL;
}