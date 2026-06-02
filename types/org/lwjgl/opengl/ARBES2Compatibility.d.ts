import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBES2Compatibility extends Object {
    static GL_FIXED: number;
    static GL_HIGH_FLOAT: number;
    static GL_HIGH_INT: number;
    static GL_IMPLEMENTATION_COLOR_READ_FORMAT: number;
    static GL_IMPLEMENTATION_COLOR_READ_TYPE: number;
    static GL_LOW_FLOAT: number;
    static GL_LOW_INT: number;
    static GL_MAX_FRAGMENT_UNIFORM_VECTORS: number;
    static GL_MAX_VARYING_VECTORS: number;
    static GL_MAX_VERTEX_UNIFORM_VECTORS: number;
    static GL_MEDIUM_FLOAT: number;
    static GL_MEDIUM_INT: number;
    static GL_NUM_SHADER_BINARY_FORMATS: number;
    static GL_RGB565: number;
    static GL_SHADER_BINARY_FORMATS: number;
    static GL_SHADER_COMPILER: number;
    static glClearDepthf(paramarg0: number): void;
    static glDepthRangef(paramarg0: number, paramarg1: number): void;
    static glGetShaderPrecisionFormat(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): number;
    static glGetShaderPrecisionFormat(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number[]): void;
    static glGetShaderPrecisionFormat(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: IntBuffer): void;
    static glReleaseShaderCompiler(): void;
    static glShaderBinary(paramarg0: number[], paramarg1: number, paramarg2: ByteBuffer): void;
    static glShaderBinary(paramarg0: IntBuffer, paramarg1: number, paramarg2: ByteBuffer): void;
    static nglGetShaderPrecisionFormat(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglShaderBinary(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    constructor()
}