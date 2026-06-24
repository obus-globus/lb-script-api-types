import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoEncodeH264QpKHR extends Struct<VkVideoEncodeH264QpKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static QPB: number;
    static QPI: number;
    static QPP: number;
    static SIZEOF: number;
    static calloc(): VkVideoEncodeH264QpKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeH264QpKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeH264QpKHR;
    static create(paramarg0: number): VkVideoEncodeH264QpKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeH264QpKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeH264QpKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeH264QpKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nqpB(paramarg0: number): number;
    static nqpB(paramarg0: number, paramarg1: number): void;
    static nqpI(paramarg0: number): number;
    static nqpI(paramarg0: number, paramarg1: number): void;
    static nqpP(paramarg0: number): number;
    static nqpP(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeH264QpKHR;
    qpB(): number;
    qpB(arg0: number): VkVideoEncodeH264QpKHR;
    qpI(): number;
    qpI(arg0: number): VkVideoEncodeH264QpKHR;
    qpP(): number;
    qpP(arg0: number): VkVideoEncodeH264QpKHR;
    set(arg0: number, arg1: number, arg2: number): VkVideoEncodeH264QpKHR;
    set(arg0: VkVideoEncodeH264QpKHR): VkVideoEncodeH264QpKHR;
    sizeof(): number;
}