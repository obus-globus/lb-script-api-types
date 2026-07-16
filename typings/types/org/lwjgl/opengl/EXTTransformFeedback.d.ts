import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class EXTTransformFeedback extends Object {
    static GL_INTERLEAVED_ATTRIBS_EXT: number;
    static GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS_EXT: number;
    static GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS_EXT: number;
    static GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS_EXT: number;
    static GL_PRIMITIVES_GENERATED_EXT: number;
    static GL_RASTERIZER_DISCARD_EXT: number;
    static GL_SEPARATE_ATTRIBS_EXT: number;
    static GL_TRANSFORM_FEEDBACK_BUFFER_BINDING_EXT: number;
    static GL_TRANSFORM_FEEDBACK_BUFFER_EXT: number;
    static GL_TRANSFORM_FEEDBACK_BUFFER_MODE_EXT: number;
    static GL_TRANSFORM_FEEDBACK_BUFFER_SIZE_EXT: number;
    static GL_TRANSFORM_FEEDBACK_BUFFER_START_EXT: number;
    static GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN_EXT: number;
    static GL_TRANSFORM_FEEDBACK_VARYINGS_EXT: number;
    static GL_TRANSFORM_FEEDBACK_VARYING_MAX_LENGTH_EXT: number;
    static glBeginTransformFeedbackEXT(paramarg0: number): void;
    static glBindBufferBaseEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glBindBufferOffsetEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glBindBufferRangeEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glEndTransformFeedbackEXT(): void;
    static glGetBooleanIndexedEXT(paramarg0: number, paramarg1: number): boolean;
    static glGetBooleanIndexedvEXT(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): void;
    static glGetIntegerIndexedEXT(paramarg0: number, paramarg1: number): number;
    static glGetIntegerIndexedvEXT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetIntegerIndexedvEXT(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glGetTransformFeedbackVaryingEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer, paramarg4: IntBuffer): string;
    static glGetTransformFeedbackVaryingEXT(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: IntBuffer): string;
    static glGetTransformFeedbackVaryingEXT(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number[], paramarg4: number[], paramarg5: ByteBuffer): void;
    static glGetTransformFeedbackVaryingEXT(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: IntBuffer, paramarg4: IntBuffer, paramarg5: ByteBuffer): void;
    static glTransformFeedbackVaryingsEXT(paramarg0: number, paramarg1: CharSequence, paramarg2: number): void;
    static glTransformFeedbackVaryingsEXT(paramarg0: number, paramarg1: CharSequence[], paramarg2: number): void;
    static glTransformFeedbackVaryingsEXT(paramarg0: number, paramarg1: PointerBuffer, paramarg2: number): void;
    static nglGetBooleanIndexedvEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetIntegerIndexedvEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetTransformFeedbackVaryingEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static nglTransformFeedbackVaryingsEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}