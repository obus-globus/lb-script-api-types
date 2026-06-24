import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPerformanceValueDataINTEL extends Struct<VkPerformanceValueDataINTEL> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static VALUE32: number;
    static VALUE64: number;
    static VALUEBOOL: number;
    static VALUEFLOAT: number;
    static VALUESTRING: number;
    static calloc(): VkPerformanceValueDataINTEL;
    static calloc(paramarg0: MemoryStack): VkPerformanceValueDataINTEL;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPerformanceValueDataINTEL;
    static create(paramarg0: number): VkPerformanceValueDataINTEL;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPerformanceValueDataINTEL;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPerformanceValueDataINTEL;
    static malloc(paramarg0: MemoryStack): VkPerformanceValueDataINTEL;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nvalue32(paramarg0: number): number;
    static nvalue32(paramarg0: number, paramarg1: number): void;
    static nvalue64(paramarg0: number): number;
    static nvalue64(paramarg0: number, paramarg1: number): void;
    static nvalueBool(paramarg0: number): number;
    static nvalueBool(paramarg0: number, paramarg1: number): void;
    static nvalueFloat(paramarg0: number): number;
    static nvalueFloat(paramarg0: number, paramarg1: number): void;
    static nvalueString(paramarg0: number): ByteBuffer;
    static nvalueString(paramarg0: number, paramarg1: ByteBuffer): void;
    static nvalueStringString(paramarg0: number): string;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPerformanceValueDataINTEL;
    set(arg0: VkPerformanceValueDataINTEL): VkPerformanceValueDataINTEL;
    sizeof(): number;
    value32(): number;
    value32(arg0: number): VkPerformanceValueDataINTEL;
    value64(): number;
    value64(arg0: number): VkPerformanceValueDataINTEL;
    valueBool(): boolean;
    valueBool(arg0: boolean): VkPerformanceValueDataINTEL;
    valueFloat(): number;
    valueFloat(arg0: number): VkPerformanceValueDataINTEL;
    valueString(): ByteBuffer;
    valueString(arg0: ByteBuffer): VkPerformanceValueDataINTEL;
    valueStringString(): string;
}