import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class ARBProgramInterfaceQuery extends Object {
    static GL_ACTIVE_RESOURCES: number;
    static GL_ACTIVE_VARIABLES: number;
    static GL_ARRAY_SIZE: number;
    static GL_ARRAY_STRIDE: number;
    static GL_ATOMIC_COUNTER_BUFFER_INDEX: number;
    static GL_BLOCK_INDEX: number;
    static GL_BUFFER_BINDING: number;
    static GL_BUFFER_DATA_SIZE: number;
    static GL_BUFFER_VARIABLE: number;
    static GL_COMPUTE_SUBROUTINE: number;
    static GL_COMPUTE_SUBROUTINE_UNIFORM: number;
    static GL_FRAGMENT_SUBROUTINE: number;
    static GL_FRAGMENT_SUBROUTINE_UNIFORM: number;
    static GL_GEOMETRY_SUBROUTINE: number;
    static GL_GEOMETRY_SUBROUTINE_UNIFORM: number;
    static GL_IS_PER_PATCH: number;
    static GL_IS_ROW_MAJOR: number;
    static GL_LOCATION: number;
    static GL_LOCATION_INDEX: number;
    static GL_MATRIX_STRIDE: number;
    static GL_MAX_NAME_LENGTH: number;
    static GL_MAX_NUM_ACTIVE_VARIABLES: number;
    static GL_MAX_NUM_COMPATIBLE_SUBROUTINES: number;
    static GL_NAME_LENGTH: number;
    static GL_NUM_ACTIVE_VARIABLES: number;
    static GL_OFFSET: number;
    static GL_PROGRAM_INPUT: number;
    static GL_PROGRAM_OUTPUT: number;
    static GL_REFERENCED_BY_COMPUTE_SHADER: number;
    static GL_REFERENCED_BY_FRAGMENT_SHADER: number;
    static GL_REFERENCED_BY_GEOMETRY_SHADER: number;
    static GL_REFERENCED_BY_TESS_CONTROL_SHADER: number;
    static GL_REFERENCED_BY_TESS_EVALUATION_SHADER: number;
    static GL_REFERENCED_BY_VERTEX_SHADER: number;
    static GL_SHADER_STORAGE_BLOCK: number;
    static GL_TESS_CONTROL_SUBROUTINE: number;
    static GL_TESS_CONTROL_SUBROUTINE_UNIFORM: number;
    static GL_TESS_EVALUATION_SUBROUTINE: number;
    static GL_TESS_EVALUATION_SUBROUTINE_UNIFORM: number;
    static GL_TOP_LEVEL_ARRAY_SIZE: number;
    static GL_TOP_LEVEL_ARRAY_STRIDE: number;
    static GL_TRANSFORM_FEEDBACK_VARYING: number;
    static GL_TYPE: number;
    static GL_UNIFORM: number;
    static GL_UNIFORM_BLOCK: number;
    static GL_VERTEX_SUBROUTINE: number;
    static GL_VERTEX_SUBROUTINE_UNIFORM: number;
    static glGetProgramInterfacei(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static glGetProgramInterfaceiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glGetProgramInterfaceiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): void;
    static glGetProgramResourceIndex(paramarg0: number, paramarg1: number, paramarg2: CharSequence): number;
    static glGetProgramResourceIndex(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): number;
    static glGetProgramResourceLocation(paramarg0: number, paramarg1: number, paramarg2: CharSequence): number;
    static glGetProgramResourceLocation(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): number;
    static glGetProgramResourceLocationIndex(paramarg0: number, paramarg1: number, paramarg2: CharSequence): number;
    static glGetProgramResourceLocationIndex(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): number;
    static glGetProgramResourceName(paramarg0: number, paramarg1: number, paramarg2: number): string;
    static glGetProgramResourceName(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): string;
    static glGetProgramResourceName(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: ByteBuffer): void;
    static glGetProgramResourceName(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer, paramarg4: ByteBuffer): void;
    static glGetProgramResourceiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: number[], paramarg5: number[]): void;
    static glGetProgramResourceiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer, paramarg4: IntBuffer, paramarg5: IntBuffer): void;
    static nglGetProgramInterfaceiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglGetProgramResourceIndex(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nglGetProgramResourceLocation(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nglGetProgramResourceLocationIndex(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nglGetProgramResourceName(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nglGetProgramResourceiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): void;
    constructor()
}