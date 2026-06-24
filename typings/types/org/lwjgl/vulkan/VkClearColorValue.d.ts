import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkClearColorValue extends Struct<VkClearColorValue> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLOAT32: number;
    static INT32: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static UINT32: number;
    static calloc(): VkClearColorValue;
    static calloc(paramarg0: MemoryStack): VkClearColorValue;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkClearColorValue;
    static create(paramarg0: number): VkClearColorValue;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkClearColorValue;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkClearColorValue;
    static malloc(paramarg0: MemoryStack): VkClearColorValue;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfloat32(paramarg0: number, paramarg1: number): number;
    static nfloat32(paramarg0: number): FloatBuffer;
    static nfloat32(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nfloat32(paramarg0: number, paramarg1: FloatBuffer): void;
    static nint32(paramarg0: number, paramarg1: number): number;
    static nint32(paramarg0: number): IntBuffer;
    static nint32(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nint32(paramarg0: number, paramarg1: IntBuffer): void;
    static nuint32(paramarg0: number, paramarg1: number): number;
    static nuint32(paramarg0: number): IntBuffer;
    static nuint32(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nuint32(paramarg0: number, paramarg1: IntBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkClearColorValue;
    float32(): FloatBuffer;
    float32(arg0: FloatBuffer): VkClearColorValue;
    float32(arg0: number): number;
    float32(arg0: number, arg1: number): VkClearColorValue;
    int32(): IntBuffer;
    int32(arg0: IntBuffer): VkClearColorValue;
    int32(arg0: number): number;
    int32(arg0: number, arg1: number): VkClearColorValue;
    set(arg0: VkClearColorValue): VkClearColorValue;
    sizeof(): number;
    uint32(): IntBuffer;
    uint32(arg0: IntBuffer): VkClearColorValue;
    uint32(arg0: number): number;
    uint32(arg0: number, arg1: number): VkClearColorValue;
}