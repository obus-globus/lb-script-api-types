import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBGetProgramBinary extends Object {
    static GL_NUM_PROGRAM_BINARY_FORMATS: number;
    static GL_PROGRAM_BINARY_FORMATS: number;
    static GL_PROGRAM_BINARY_LENGTH: number;
    static GL_PROGRAM_BINARY_RETRIEVABLE_HINT: number;
    static glGetProgramBinary(paramarg0: number, paramarg1: number[], paramarg2: number[], paramarg3: ByteBuffer): void;
    static glGetProgramBinary(paramarg0: number, paramarg1: IntBuffer, paramarg2: IntBuffer, paramarg3: ByteBuffer): void;
    static glProgramBinary(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): void;
    static glProgramParameteri(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetProgramBinary(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglProgramBinary(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}