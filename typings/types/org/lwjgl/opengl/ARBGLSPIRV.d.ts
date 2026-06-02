import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class ARBGLSPIRV extends Object {
    static GL_SHADER_BINARY_FORMAT_SPIR_V_ARB: number;
    static GL_SPIR_V_BINARY_ARB: number;
    static glSpecializeShaderARB(paramarg0: number, paramarg1: CharSequence, paramarg2: number[], paramarg3: number[]): void;
    static glSpecializeShaderARB(paramarg0: number, paramarg1: CharSequence, paramarg2: IntBuffer, paramarg3: IntBuffer): void;
    static glSpecializeShaderARB(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number[], paramarg3: number[]): void;
    static glSpecializeShaderARB(paramarg0: number, paramarg1: ByteBuffer, paramarg2: IntBuffer, paramarg3: IntBuffer): void;
    static nglSpecializeShaderARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    constructor()
}