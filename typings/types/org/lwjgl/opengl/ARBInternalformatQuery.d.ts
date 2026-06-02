import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBInternalformatQuery extends Object {
    static GL_NUM_SAMPLE_COUNTS: number;
    static glGetInternalformati(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static glGetInternalformativ(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glGetInternalformativ(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): void;
    static nglGetInternalformativ(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    constructor()
}