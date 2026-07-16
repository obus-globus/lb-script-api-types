import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class KHRRobustness extends Object {
    static GL_CONTEXT_LOST: number;
    static GL_CONTEXT_ROBUST_ACCESS: number;
    static GL_GUILTY_CONTEXT_RESET: number;
    static GL_INNOCENT_CONTEXT_RESET: number;
    static GL_LOSE_CONTEXT_ON_RESET: number;
    static GL_NO_ERROR: number;
    static GL_NO_RESET_NOTIFICATION: number;
    static GL_RESET_NOTIFICATION_STRATEGY: number;
    static GL_UNKNOWN_CONTEXT_RESET: number;
    static glGetGraphicsResetStatus(): number;
    static glGetnUniformf(paramarg0: number, paramarg1: number): number;
    static glGetnUniformfv(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetnUniformfv(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): void;
    static glGetnUniformi(paramarg0: number, paramarg1: number): number;
    static glGetnUniformiv(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetnUniformiv(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glGetnUniformui(paramarg0: number, paramarg1: number): number;
    static glGetnUniformuiv(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetnUniformuiv(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glReadnPixels(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number[]): void;
    static glReadnPixels(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): void;
    static glReadnPixels(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: ByteBuffer): void;
    static glReadnPixels(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: FloatBuffer): void;
    static glReadnPixels(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: IntBuffer): void;
    static glReadnPixels(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: ShortBuffer): void;
    static nglGetnUniformfv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglGetnUniformiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglGetnUniformuiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglReadnPixels(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): void;
    constructor()
}