import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPerformanceCounterResultKHR extends Struct<VkPerformanceCounterResultKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLOAT32: number;
    static FLOAT64: number;
    static INT32: number;
    static INT64: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static UINT32: number;
    static UINT64: number;
    static calloc(): VkPerformanceCounterResultKHR;
    static calloc(paramarg0: MemoryStack): VkPerformanceCounterResultKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPerformanceCounterResultKHR;
    static create(paramarg0: number): VkPerformanceCounterResultKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPerformanceCounterResultKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPerformanceCounterResultKHR;
    static malloc(paramarg0: MemoryStack): VkPerformanceCounterResultKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfloat32(paramarg0: number): number;
    static nfloat32(paramarg0: number, paramarg1: number): void;
    static nfloat64(paramarg0: number): number;
    static nfloat64(paramarg0: number, paramarg1: number): void;
    static nint32(paramarg0: number): number;
    static nint32(paramarg0: number, paramarg1: number): void;
    static nint64(paramarg0: number): number;
    static nint64(paramarg0: number, paramarg1: number): void;
    static nuint32(paramarg0: number): number;
    static nuint32(paramarg0: number, paramarg1: number): void;
    static nuint64(paramarg0: number): number;
    static nuint64(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPerformanceCounterResultKHR;
    float32(): number;
    float32(arg0: number): VkPerformanceCounterResultKHR;
    float64(): number;
    float64(arg0: number): VkPerformanceCounterResultKHR;
    int32(): number;
    int32(arg0: number): VkPerformanceCounterResultKHR;
    int64(): number;
    int64(arg0: number): VkPerformanceCounterResultKHR;
    set(arg0: VkPerformanceCounterResultKHR): VkPerformanceCounterResultKHR;
    sizeof(): number;
    uint32(): number;
    uint32(arg0: number): VkPerformanceCounterResultKHR;
    uint64(): number;
    uint64(arg0: number): VkPerformanceCounterResultKHR;
}