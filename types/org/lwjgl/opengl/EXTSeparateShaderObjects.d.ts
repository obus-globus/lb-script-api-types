import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class EXTSeparateShaderObjects extends Object {
    static GL_ACTIVE_PROGRAM_EXT: number;
    static glActiveProgramEXT(paramarg0: number): void;
    static glCreateShaderProgramEXT(paramarg0: number, paramarg1: CharSequence): number;
    static glCreateShaderProgramEXT(paramarg0: number, paramarg1: ByteBuffer): number;
    static glUseShaderProgramEXT(paramarg0: number, paramarg1: number): void;
    static nglCreateShaderProgramEXT(paramarg0: number, paramarg1: number): number;
    constructor()
}