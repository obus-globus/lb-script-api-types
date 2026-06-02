import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class ARBUniformBufferObject extends Object {
    static GL_ACTIVE_UNIFORM_BLOCKS: number;
    static GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH: number;
    static GL_INVALID_INDEX: number;
    static GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: number;
    static GL_MAX_COMBINED_GEOMETRY_UNIFORM_COMPONENTS: number;
    static GL_MAX_COMBINED_UNIFORM_BLOCKS: number;
    static GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: number;
    static GL_MAX_FRAGMENT_UNIFORM_BLOCKS: number;
    static GL_MAX_GEOMETRY_UNIFORM_BLOCKS: number;
    static GL_MAX_UNIFORM_BLOCK_SIZE: number;
    static GL_MAX_UNIFORM_BUFFER_BINDINGS: number;
    static GL_MAX_VERTEX_UNIFORM_BLOCKS: number;
    static GL_UNIFORM_ARRAY_STRIDE: number;
    static GL_UNIFORM_BLOCK_ACTIVE_UNIFORMS: number;
    static GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: number;
    static GL_UNIFORM_BLOCK_BINDING: number;
    static GL_UNIFORM_BLOCK_DATA_SIZE: number;
    static GL_UNIFORM_BLOCK_INDEX: number;
    static GL_UNIFORM_BLOCK_NAME_LENGTH: number;
    static GL_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: number;
    static GL_UNIFORM_BLOCK_REFERENCED_BY_GEOMETRY_SHADER: number;
    static GL_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: number;
    static GL_UNIFORM_BUFFER: number;
    static GL_UNIFORM_BUFFER_BINDING: number;
    static GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT: number;
    static GL_UNIFORM_BUFFER_SIZE: number;
    static GL_UNIFORM_BUFFER_START: number;
    static GL_UNIFORM_IS_ROW_MAJOR: number;
    static GL_UNIFORM_MATRIX_STRIDE: number;
    static GL_UNIFORM_NAME_LENGTH: number;
    static GL_UNIFORM_OFFSET: number;
    static GL_UNIFORM_SIZE: number;
    static GL_UNIFORM_TYPE: number;
    static glBindBufferBase(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glBindBufferRange(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glGetActiveUniformBlockName(paramarg0: number, paramarg1: number): string;
    static glGetActiveUniformBlockName(paramarg0: number, paramarg1: number, paramarg2: number): string;
    static glGetActiveUniformBlockName(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: ByteBuffer): void;
    static glGetActiveUniformBlockName(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: ByteBuffer): void;
    static glGetActiveUniformBlocki(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static glGetActiveUniformBlockiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glGetActiveUniformBlockiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): void;
    static glGetActiveUniformName(paramarg0: number, paramarg1: number): string;
    static glGetActiveUniformName(paramarg0: number, paramarg1: number, paramarg2: number): string;
    static glGetActiveUniformName(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: ByteBuffer): void;
    static glGetActiveUniformName(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: ByteBuffer): void;
    static glGetActiveUniformsi(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static glGetActiveUniformsiv(paramarg0: number, paramarg1: number[], paramarg2: number, paramarg3: number[]): void;
    static glGetActiveUniformsiv(paramarg0: number, paramarg1: IntBuffer, paramarg2: number, paramarg3: IntBuffer): void;
    static glGetIntegeri(paramarg0: number, paramarg1: number): number;
    static glGetIntegeri_v(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetIntegeri_v(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glGetUniformBlockIndex(paramarg0: number, paramarg1: CharSequence): number;
    static glGetUniformBlockIndex(paramarg0: number, paramarg1: ByteBuffer): number;
    static glGetUniformIndices(paramarg0: number, paramarg1: CharSequence): number;
    static glGetUniformIndices(paramarg0: number, paramarg1: (Object | null)[], paramarg2: IntBuffer): void;
    static glGetUniformIndices(paramarg0: number, paramarg1: PointerBuffer, paramarg2: number[]): void;
    static glGetUniformIndices(paramarg0: number, paramarg1: PointerBuffer, paramarg2: IntBuffer): void;
    static glUniformBlockBinding(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetActiveUniformBlockName(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglGetActiveUniformBlockiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglGetActiveUniformName(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglGetActiveUniformsiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglGetIntegeri_v(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetUniformBlockIndex(paramarg0: number, paramarg1: number): number;
    static nglGetUniformIndices(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}