import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVTransformFeedback2 extends Object {
    static GL_TRANSFORM_FEEDBACK_BINDING_NV: number;
    static GL_TRANSFORM_FEEDBACK_BUFFER_ACTIVE_NV: number;
    static GL_TRANSFORM_FEEDBACK_BUFFER_PAUSED_NV: number;
    static GL_TRANSFORM_FEEDBACK_NV: number;
    static glBindTransformFeedbackNV(paramarg0: number, paramarg1: number): void;
    static glDeleteTransformFeedbacksNV(paramarg0: number): void;
    static glDeleteTransformFeedbacksNV(paramarg0: number[]): void;
    static glDeleteTransformFeedbacksNV(paramarg0: IntBuffer): void;
    static glDrawTransformFeedbackNV(paramarg0: number, paramarg1: number): void;
    static glGenTransformFeedbacksNV(): number;
    static glGenTransformFeedbacksNV(paramarg0: number[]): void;
    static glGenTransformFeedbacksNV(paramarg0: IntBuffer): void;
    static glIsTransformFeedbackNV(paramarg0: number): boolean;
    static glPauseTransformFeedbackNV(): void;
    static glResumeTransformFeedbackNV(): void;
    static nglDeleteTransformFeedbacksNV(paramarg0: number, paramarg1: number): void;
    static nglGenTransformFeedbacksNV(paramarg0: number, paramarg1: number): void;
    constructor()
}