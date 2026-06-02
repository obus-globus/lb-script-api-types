import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class NVTransformFeedback extends Object {
    static GL_ACTIVE_VARYINGS_NV: number;
    static GL_ACTIVE_VARYING_MAX_LENGTH_NV: number;
    static GL_BACK_PRIMARY_COLOR_NV: number;
    static GL_BACK_SECONDARY_COLOR_NV: number;
    static GL_CLIP_DISTANCE_NV: number;
    static GL_GENERIC_ATTRIB_NV: number;
    static GL_INTERLEAVED_ATTRIBS_NV: number;
    static GL_LAYER_NV: number;
    static GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS_NV: number;
    static GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS_NV: number;
    static GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS_NV: number;
    static GL_PRIMITIVES_GENERATED_NV: number;
    static GL_PRIMITIVE_ID_NV: number;
    static GL_RASTERIZER_DISCARD_NV: number;
    static GL_SECONDARY_COLOR_NV: number;
    static GL_SEPARATE_ATTRIBS_NV: number;
    static GL_TEXTURE_COORD_NV: number;
    static GL_TRANSFORM_FEEDBACK_ATTRIBS_NV: number;
    static GL_TRANSFORM_FEEDBACK_BUFFER_BINDING_NV: number;
    static GL_TRANSFORM_FEEDBACK_BUFFER_MODE_NV: number;
    static GL_TRANSFORM_FEEDBACK_BUFFER_NV: number;
    static GL_TRANSFORM_FEEDBACK_BUFFER_SIZE_NV: number;
    static GL_TRANSFORM_FEEDBACK_BUFFER_START_NV: number;
    static GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN_NV: number;
    static GL_TRANSFORM_FEEDBACK_RECORD_NV: number;
    static GL_TRANSFORM_FEEDBACK_VARYINGS_NV: number;
    static GL_VERTEX_ID_NV: number;
    static glActiveVaryingNV(paramarg0: number, paramarg1: CharSequence): void;
    static glActiveVaryingNV(paramarg0: number, paramarg1: ByteBuffer): void;
    static glBeginTransformFeedbackNV(paramarg0: number): void;
    static glBindBufferBaseNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glBindBufferOffsetNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glBindBufferRangeNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glEndTransformFeedbackNV(): void;
    static glGetActiveVaryingNV(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number[], paramarg4: number[], paramarg5: ByteBuffer): void;
    static glGetActiveVaryingNV(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: IntBuffer, paramarg4: IntBuffer, paramarg5: ByteBuffer): void;
    static glGetTransformFeedbackVaryingNV(paramarg0: number, paramarg1: number): number;
    static glGetTransformFeedbackVaryingNV(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetTransformFeedbackVaryingNV(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glGetVaryingLocationNV(paramarg0: number, paramarg1: CharSequence): number;
    static glGetVaryingLocationNV(paramarg0: number, paramarg1: ByteBuffer): number;
    static glTransformFeedbackAttribsNV(paramarg0: number[], paramarg1: number): void;
    static glTransformFeedbackAttribsNV(paramarg0: IntBuffer, paramarg1: number): void;
    static glTransformFeedbackStreamAttribsNV(paramarg0: number[], paramarg1: number[], paramarg2: number): void;
    static glTransformFeedbackStreamAttribsNV(paramarg0: IntBuffer, paramarg1: IntBuffer, paramarg2: number): void;
    static glTransformFeedbackVaryingsNV(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static glTransformFeedbackVaryingsNV(paramarg0: number, paramarg1: IntBuffer, paramarg2: number): void;
    static nglActiveVaryingNV(paramarg0: number, paramarg1: number): void;
    static nglGetActiveVaryingNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static nglGetTransformFeedbackVaryingNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetVaryingLocationNV(paramarg0: number, paramarg1: number): number;
    static nglTransformFeedbackAttribsNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglTransformFeedbackStreamAttribsNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglTransformFeedbackVaryingsNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}