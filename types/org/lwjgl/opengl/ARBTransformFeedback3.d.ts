import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBTransformFeedback3 extends Object {
    static GL_MAX_TRANSFORM_FEEDBACK_BUFFERS: number;
    static GL_MAX_VERTEX_STREAMS: number;
    static glBeginQueryIndexed(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glDrawTransformFeedbackStream(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glEndQueryIndexed(paramarg0: number, paramarg1: number): void;
    static glGetQueryIndexedi(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static glGetQueryIndexediv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glGetQueryIndexediv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): void;
    static nglGetQueryIndexediv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}