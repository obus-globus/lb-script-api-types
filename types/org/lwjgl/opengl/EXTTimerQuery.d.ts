import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTTimerQuery extends Object {
    static GL_TIME_ELAPSED_EXT: number;
    static glGetQueryObjecti64EXT(paramarg0: number, paramarg1: number): number;
    static glGetQueryObjecti64vEXT(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static glGetQueryObjecti64vEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glGetQueryObjecti64vEXT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetQueryObjectui64EXT(paramarg0: number, paramarg1: number): number;
    static glGetQueryObjectui64vEXT(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static glGetQueryObjectui64vEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glGetQueryObjectui64vEXT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static nglGetQueryObjecti64vEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetQueryObjectui64vEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}