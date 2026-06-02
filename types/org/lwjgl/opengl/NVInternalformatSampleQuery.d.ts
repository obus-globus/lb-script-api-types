import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVInternalformatSampleQuery extends Object {
    static GL_CONFORMANT_NV: number;
    static GL_MULTISAMPLES_NV: number;
    static GL_SUPERSAMPLE_SCALE_X_NV: number;
    static GL_SUPERSAMPLE_SCALE_Y_NV: number;
    static glGetInternalformatSampleivNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number[]): void;
    static glGetInternalformatSampleivNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: IntBuffer): void;
    static nglGetInternalformatSampleivNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    constructor()
}