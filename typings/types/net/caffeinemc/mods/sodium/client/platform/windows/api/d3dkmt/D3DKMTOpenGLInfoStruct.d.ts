import type { ByteBuffer } from '../../../../../../../../../java/nio/ByteBuffer.d.ts'
import type { MemoryStack } from '../../../../../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct } from '../../../../../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class D3DKMTOpenGLInfoStruct extends Struct<D3DKMTOpenGLInfoStruct> {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static calloc(): D3DKMTOpenGLInfoStruct;
    static calloc(paramarg0: MemoryStack): D3DKMTOpenGLInfoStruct;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    private constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): D3DKMTOpenGLInfoStruct;
    getFlags(): number;
    getUserModeDriverFileName(): string;
    getUserModeDriverFileNameBuffer(): ByteBuffer;
    getVersion(): number;
    sizeof(): number;
}