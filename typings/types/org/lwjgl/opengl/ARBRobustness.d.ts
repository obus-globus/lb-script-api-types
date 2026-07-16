import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBRobustness extends Object {
    static GL_CONTEXT_FLAG_ROBUST_ACCESS_BIT_ARB: number;
    static GL_GUILTY_CONTEXT_RESET_ARB: number;
    static GL_INNOCENT_CONTEXT_RESET_ARB: number;
    static GL_LOSE_CONTEXT_ON_RESET_ARB: number;
    static GL_NO_RESET_NOTIFICATION_ARB: number;
    static GL_RESET_NOTIFICATION_STRATEGY_ARB: number;
    static GL_UNKNOWN_CONTEXT_RESET_ARB: number;
    static glGetGraphicsResetStatusARB(): number;
    static glGetnColorTableARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glGetnColorTableARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glGetnColorTableARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer): void;
    static glGetnColorTableARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: FloatBuffer): void;
    static glGetnColorTableARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): void;
    static glGetnColorTableARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ShortBuffer): void;
    static glGetnCompressedTexImageARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glGetnCompressedTexImageARB(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): void;
    static glGetnConvolutionFilterARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glGetnConvolutionFilterARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer): void;
    static glGetnHistogramARB(paramarg0: number, paramarg1: boolean, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glGetnHistogramARB(paramarg0: number, paramarg1: boolean, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): void;
    static glGetnMapdARB(paramarg0: number, paramarg1: number): number;
    static glGetnMapdvARB(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetnMapdvARB(paramarg0: number, paramarg1: number, paramarg2: DoubleBuffer): void;
    static glGetnMapfARB(paramarg0: number, paramarg1: number): number;
    static glGetnMapfvARB(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetnMapfvARB(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): void;
    static glGetnMapiARB(paramarg0: number, paramarg1: number): number;
    static glGetnMapivARB(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetnMapivARB(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glGetnMinmaxARB(paramarg0: number, paramarg1: boolean, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glGetnMinmaxARB(paramarg0: number, paramarg1: boolean, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): void;
    static glGetnPixelMapfvARB(paramarg0: number, paramarg1: number[]): void;
    static glGetnPixelMapfvARB(paramarg0: number, paramarg1: FloatBuffer): void;
    static glGetnPixelMapuivARB(paramarg0: number, paramarg1: number[]): void;
    static glGetnPixelMapuivARB(paramarg0: number, paramarg1: IntBuffer): void;
    static glGetnPixelMapusvARB(paramarg0: number, paramarg1: ShortBuffer): void;
    static glGetnPixelMapusvARB(paramarg0: number, paramarg1: number[]): void;
    static glGetnPolygonStippleARB(paramarg0: number, paramarg1: number): void;
    static glGetnPolygonStippleARB(paramarg0: ByteBuffer): void;
    static glGetnSeparableFilterARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: ByteBuffer): void;
    static glGetnSeparableFilterARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer, paramarg4: ByteBuffer, paramarg5: ByteBuffer): void;
    static glGetnTexImageARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number[]): void;
    static glGetnTexImageARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glGetnTexImageARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): void;
    static glGetnTexImageARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: DoubleBuffer): void;
    static glGetnTexImageARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: FloatBuffer): void;
    static glGetnTexImageARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: IntBuffer): void;
    static glGetnTexImageARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ShortBuffer): void;
    static glGetnUniformdARB(paramarg0: number, paramarg1: number): number;
    static glGetnUniformdvARB(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetnUniformdvARB(paramarg0: number, paramarg1: number, paramarg2: DoubleBuffer): void;
    static glGetnUniformfARB(paramarg0: number, paramarg1: number): number;
    static glGetnUniformfvARB(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetnUniformfvARB(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): void;
    static glGetnUniformiARB(paramarg0: number, paramarg1: number): number;
    static glGetnUniformivARB(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetnUniformivARB(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glGetnUniformuiARB(paramarg0: number, paramarg1: number): number;
    static glGetnUniformuivARB(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetnUniformuivARB(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glReadnPixelsARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number[]): void;
    static glReadnPixelsARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): void;
    static glReadnPixelsARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: ByteBuffer): void;
    static glReadnPixelsARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: FloatBuffer): void;
    static glReadnPixelsARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: IntBuffer): void;
    static glReadnPixelsARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: ShortBuffer): void;
    static nglGetnColorTableARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglGetnCompressedTexImageARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglGetnConvolutionFilterARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglGetnHistogramARB(paramarg0: number, paramarg1: boolean, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nglGetnMapdvARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglGetnMapfvARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglGetnMapivARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglGetnMinmaxARB(paramarg0: number, paramarg1: boolean, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nglGetnPixelMapfvARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetnPixelMapuivARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetnPixelMapusvARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetnPolygonStippleARB(paramarg0: number, paramarg1: number): void;
    static nglGetnSeparableFilterARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): void;
    static nglGetnTexImageARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nglGetnUniformdvARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglGetnUniformfvARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglGetnUniformivARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglGetnUniformuivARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglReadnPixelsARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): void;
    constructor()
}