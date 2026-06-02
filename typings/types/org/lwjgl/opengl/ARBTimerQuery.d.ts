import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBTimerQuery extends Object {
    static GL_TIMESTAMP: number;
    static GL_TIME_ELAPSED: number;
    static glGetQueryObjecti64(paramarg0: number, paramarg1: number): number;
    static glGetQueryObjecti64v(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static glGetQueryObjecti64v(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glGetQueryObjecti64v(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetQueryObjectui64(paramarg0: number, paramarg1: number): number;
    static glGetQueryObjectui64v(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static glGetQueryObjectui64v(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glGetQueryObjectui64v(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glQueryCounter(paramarg0: number, paramarg1: number): void;
    static nglGetQueryObjecti64v(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetQueryObjectui64v(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}