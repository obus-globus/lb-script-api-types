import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPerformanceCounterKHR extends Struct<VkPerformanceCounterKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SCOPE: number;
    static SIZEOF: number;
    static STORAGE: number;
    static STYPE: number;
    static UNIT: number;
    static UUID: number;
    static calloc(): VkPerformanceCounterKHR;
    static calloc(paramarg0: MemoryStack): VkPerformanceCounterKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPerformanceCounterKHR;
    static create(paramarg0: number): VkPerformanceCounterKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPerformanceCounterKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPerformanceCounterKHR;
    static malloc(paramarg0: MemoryStack): VkPerformanceCounterKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nscope(paramarg0: number): number;
    static nstorage(paramarg0: number): number;
    static nunit(paramarg0: number): number;
    static nuuid(paramarg0: number, paramarg1: number): number;
    static nuuid(paramarg0: number): ByteBuffer;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPerformanceCounterKHR;
    pNext(): number;
    pNext(arg0: number): VkPerformanceCounterKHR;
    sType(): number;
    sType(arg0: number): VkPerformanceCounterKHR;
    sType$Default(): VkPerformanceCounterKHR;
    scope(): number;
    set(arg0: number, arg1: number): VkPerformanceCounterKHR;
    set(arg0: VkPerformanceCounterKHR): VkPerformanceCounterKHR;
    sizeof(): number;
    storage(): number;
    unit(): number;
    uuid(): ByteBuffer;
    uuid(arg0: number): number;
}