import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkTransformMatrixKHR extends Struct<VkTransformMatrixKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MATRIX: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkTransformMatrixKHR;
    static calloc(paramarg0: MemoryStack): VkTransformMatrixKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkTransformMatrixKHR;
    static create(paramarg0: number): VkTransformMatrixKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkTransformMatrixKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkTransformMatrixKHR;
    static malloc(paramarg0: MemoryStack): VkTransformMatrixKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmatrix(paramarg0: number, paramarg1: number): number;
    static nmatrix(paramarg0: number): FloatBuffer;
    static nmatrix(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nmatrix(paramarg0: number, paramarg1: FloatBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkTransformMatrixKHR;
    matrix(): FloatBuffer;
    matrix(arg0: FloatBuffer): VkTransformMatrixKHR;
    matrix(arg0: number): number;
    matrix(arg0: number, arg1: number): VkTransformMatrixKHR;
    set(arg0: VkTransformMatrixKHR): VkTransformMatrixKHR;
    sizeof(): number;
}