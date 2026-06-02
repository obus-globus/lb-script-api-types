import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBTransformFeedback2 extends Object {
    static GL_TRANSFORM_FEEDBACK: number;
    static GL_TRANSFORM_FEEDBACK_BINDING: number;
    static GL_TRANSFORM_FEEDBACK_BUFFER_ACTIVE: number;
    static GL_TRANSFORM_FEEDBACK_BUFFER_PAUSED: number;
    static glBindTransformFeedback(paramarg0: number, paramarg1: number): void;
    static glDeleteTransformFeedbacks(paramarg0: number): void;
    static glDeleteTransformFeedbacks(paramarg0: number[]): void;
    static glDeleteTransformFeedbacks(paramarg0: IntBuffer): void;
    static glDrawTransformFeedback(paramarg0: number, paramarg1: number): void;
    static glGenTransformFeedbacks(): number;
    static glGenTransformFeedbacks(paramarg0: number[]): void;
    static glGenTransformFeedbacks(paramarg0: IntBuffer): void;
    static glIsTransformFeedback(paramarg0: number): boolean;
    static glPauseTransformFeedback(): void;
    static glResumeTransformFeedback(): void;
    static nglDeleteTransformFeedbacks(paramarg0: number, paramarg1: number): void;
    static nglGenTransformFeedbacks(paramarg0: number, paramarg1: number): void;
    constructor()
}