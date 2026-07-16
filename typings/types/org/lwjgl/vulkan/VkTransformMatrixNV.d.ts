import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkTransformMatrixKHR } from '../../../org/lwjgl/vulkan/VkTransformMatrixKHR.d.ts'
export class VkTransformMatrixNV extends VkTransformMatrixKHR {
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
    static calloc(): VkTransformMatrixNV;
    static calloc(paramarg0: MemoryStack): VkTransformMatrixNV;
    static create(): VkTransformMatrixKHR;
    static create(paramarg0: number): VkTransformMatrixKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkTransformMatrixNV;
    static create(paramarg0: number): VkTransformMatrixNV;
    static createSafe(paramarg0: number): VkTransformMatrixKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkTransformMatrixNV;
    static malloc(): VkTransformMatrixKHR;
    static malloc(paramarg0: MemoryStack): VkTransformMatrixKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkTransformMatrixNV;
    static malloc(paramarg0: MemoryStack): VkTransformMatrixNV;
    static nmatrix(paramarg0: number, paramarg1: number): number;
    static nmatrix(paramarg0: number): FloatBuffer;
    static nmatrix(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nmatrix(paramarg0: number, paramarg1: FloatBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkTransformMatrixNV;
    matrix(): FloatBuffer;
    matrix(arg0: FloatBuffer): VkTransformMatrixNV;
    matrix(arg0: number): number;
    matrix(arg0: number, arg1: number): VkTransformMatrixNV;
    set(arg0: VkTransformMatrixKHR): VkTransformMatrixKHR;
    set(arg0: VkTransformMatrixNV): VkTransformMatrixNV;
}