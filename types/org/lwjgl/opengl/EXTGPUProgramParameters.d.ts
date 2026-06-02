import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTGPUProgramParameters extends Object {
    static glProgramEnvParameters4fvEXT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glProgramEnvParameters4fvEXT(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): void;
    static glProgramLocalParameters4fvEXT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glProgramLocalParameters4fvEXT(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): void;
    static nglProgramEnvParameters4fvEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglProgramLocalParameters4fvEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}