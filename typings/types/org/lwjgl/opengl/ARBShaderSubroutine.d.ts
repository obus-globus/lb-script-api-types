import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class ARBShaderSubroutine extends Object {
    static GL_ACTIVE_SUBROUTINES: number;
    static GL_ACTIVE_SUBROUTINE_MAX_LENGTH: number;
    static GL_ACTIVE_SUBROUTINE_UNIFORMS: number;
    static GL_ACTIVE_SUBROUTINE_UNIFORM_LOCATIONS: number;
    static GL_ACTIVE_SUBROUTINE_UNIFORM_MAX_LENGTH: number;
    static GL_COMPATIBLE_SUBROUTINES: number;
    static GL_MAX_SUBROUTINES: number;
    static GL_MAX_SUBROUTINE_UNIFORM_LOCATIONS: number;
    static GL_NUM_COMPATIBLE_SUBROUTINES: number;
    static glGetActiveSubroutineName(paramarg0: number, paramarg1: number, paramarg2: number): string;
    static glGetActiveSubroutineName(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): string;
    static glGetActiveSubroutineName(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: ByteBuffer): void;
    static glGetActiveSubroutineName(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer, paramarg4: ByteBuffer): void;
    static glGetActiveSubroutineUniformName(paramarg0: number, paramarg1: number, paramarg2: number): string;
    static glGetActiveSubroutineUniformName(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): string;
    static glGetActiveSubroutineUniformName(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: ByteBuffer): void;
    static glGetActiveSubroutineUniformName(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer, paramarg4: ByteBuffer): void;
    static glGetActiveSubroutineUniformi(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static glGetActiveSubroutineUniformiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number[]): void;
    static glGetActiveSubroutineUniformiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: IntBuffer): void;
    static glGetProgramStagei(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static glGetProgramStageiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glGetProgramStageiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): void;
    static glGetSubroutineIndex(paramarg0: number, paramarg1: number, paramarg2: CharSequence): number;
    static glGetSubroutineIndex(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): number;
    static glGetSubroutineUniformLocation(paramarg0: number, paramarg1: number, paramarg2: CharSequence): number;
    static glGetSubroutineUniformLocation(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): number;
    static glGetUniformSubroutineui(paramarg0: number, paramarg1: number): number;
    static glGetUniformSubroutineuiv(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetUniformSubroutineuiv(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glUniformSubroutinesui(paramarg0: number, paramarg1: number): void;
    static glUniformSubroutinesuiv(paramarg0: number, paramarg1: number[]): void;
    static glUniformSubroutinesuiv(paramarg0: number, paramarg1: IntBuffer): void;
    static nglGetActiveSubroutineName(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nglGetActiveSubroutineUniformName(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nglGetActiveSubroutineUniformiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglGetProgramStageiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglGetSubroutineIndex(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nglGetSubroutineUniformLocation(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nglGetUniformSubroutineuiv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglUniformSubroutinesuiv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}